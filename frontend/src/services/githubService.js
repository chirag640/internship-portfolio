// GitHub API service for fetching pinned repositories
const GITHUB_USERNAME = 'chirag640';
const CACHE_KEY = 'github_pinned_repos';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

// GitHub GraphQL query to get pinned repositories
const PINNED_REPOS_QUERY = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
                color
              }
              stargazerCount
              forkCount
              updatedAt
              openGraphImageUrl
            }
          }
        }
      }
    }
  }
`;

// Function to check if cached data is still valid
const isCacheValid = (timestamp) => {
  return Date.now() - timestamp < CACHE_DURATION;
};

// Function to get cached data
const getCachedData = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (isCacheValid(timestamp)) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }
  return null;
};

// Function to set cached data
const setCachedData = (data) => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

// Function to transform GitHub repo data to match current project structure
const transformRepoData = (repo) => {
  return {
    id: repo.id,
    'project-name': repo.name,
    'project-desc': repo.description || 'No description available',
    'project-url': repo.homepageUrl || repo.url, // Use homepage URL if available, otherwise GitHub URL
    language: repo.primaryLanguage?.name || 'Unknown',
    languageColor: repo.primaryLanguage?.color || '#6366f1',
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    updatedAt: repo.updatedAt,
    githubUrl: repo.url
  };
};

// Main function to fetch pinned repositories
export const fetchPinnedRepos = async () => {
  // Check cache first
  const cachedData = getCachedData();
  if (cachedData) {
    return { data: cachedData, fromCache: true };
  }

  try {
    // Use GitHub's GraphQL API
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Note: For production, you might want to use a GitHub token for higher rate limits
        // 'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY
      })
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL errors: ${result.errors.map(e => e.message).join(', ')}`);
    }

    const repos = result.data?.user?.pinnedItems?.edges?.map(edge => edge.node) || [];
    const transformedRepos = repos.map(transformRepoData);

    // Cache the data
    setCachedData(transformedRepos);

    return { data: transformedRepos, fromCache: false };
  } catch (error) {
    console.error('Error fetching pinned repositories:', error);
    throw error;
  }
};

// Fallback function using REST API (in case GraphQL fails)
export const fetchPinnedReposREST = async () => {
  try {
    // First get all public repos
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
      // Filter for pinned/featured repos (you can manually specify important repos here)
    // Since REST API doesn't directly provide pinned repos, we'll take the most starred/recently updated ones
    const featuredRepos = repos
      .filter(repo => !repo.fork) // Exclude forks
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 6); // Take top 6

    const transformedRepos = featuredRepos.map(repo => ({
      id: repo.id,
      'project-name': repo.name,
      'project-desc': repo.description || 'No description available',
      'project-url': repo.homepage || repo.html_url,
      language: repo.language || 'Unknown',
      languageColor: '#6366f1', // Default color since REST API doesn't provide language colors
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
      githubUrl: repo.html_url
    }));

    return { data: transformedRepos, fromCache: false };
  } catch (error) {
    console.error('Error fetching repositories via REST API:', error);
    throw error;
  }
};

// Function to clear cache (useful for testing)
export const clearCache = () => {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};
