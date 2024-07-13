# Portfolio README

## Overview

This project is a portfolio website built using React.js. It showcases various components including Profile, Projects, About, and a custom 404 page.

## Components

### Profile
The Profile component (`Profile.js`) displays information about the user, including their job status, name, description, and contact options.

### Projects
The Projects component (`Projects.js`) lists projects fetched from a configuration file (`config.json`). It displays project names, descriptions, and images with hover effects for additional details.

### About
The About component (`About.js`) shows a brief introduction about the user, highlighting their name, description, and a grayscale image.

### Home
The Home component (`Home.js`) integrates the Profile and Projects components, along with a section inviting collaboration.

### 404 Page
The 404 Page (`NotFound.js`) displays a simple message indicating that the page was not found.

## Additional Features

- **Dynamic Content**: Content such as project details and user information is fetched dynamically from configuration files (`config.json`).
  
- **Styling**: Tailwind CSS is used for styling, ensuring responsive design across different screen sizes.

- **Interactivity**: Components like buttons and project cards include hover effects and transitions for enhanced user interaction.

## Usage

To run the project locally:

1. Clone the repository:
```bash 
git clone https://github.com/chirag640/internship-portfolio.git
```

2. Install dependencies:
```bash
cd internship-portfolio
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the browser and navigate to `http://localhost:3000` to view the portfolio.

## Dependencies

- React.js
- Tailwind CSS
- React Icons (specifically `react-icons/fa6` for social icons)


