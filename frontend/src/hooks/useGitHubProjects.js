import { useState, useEffect } from 'react';
import { fetchPinnedRepos, fetchPinnedReposREST } from '../services/githubService';
import { getConfigData } from '../data/configReader';

export const useGitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromCache, setFromCache] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from GitHub GraphQL API first
        let result;
        try {
          result = await fetchPinnedRepos();
        } catch (graphqlError) {
          console.warn('GraphQL API failed, trying REST API:', graphqlError);
          // Fallback to REST API
          result = await fetchPinnedReposREST();
        }

        if (result.data && result.data.length > 0) {
          setProjects(result.data);
          setFromCache(result.fromCache);
        } else {
          throw new Error('No repositories found');
        }
      } catch (err) {
        console.error('Failed to fetch GitHub projects:', err);
        setError(err.message);
        
        // Fallback to static data from config.json
        try {
          const configData = getConfigData();
          if (configData.projects && configData.projects.length > 0) {
            setProjects(configData.projects);
            console.log('Using fallback data from config.json');
          } else {
            setProjects([]);
          }
        } catch (configError) {
          console.error('Failed to load fallback data:', configError);
          setProjects([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchPinnedRepos();
      setProjects(result.data);
      setFromCache(result.fromCache);
    } catch (err) {
      setError(err.message);
      // Keep existing projects on refetch error
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    loading,
    error,
    fromCache,
    refetch
  };
};
