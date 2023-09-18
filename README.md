# My Portfolio Website

This repository contains the source code for the frontend of my personal portfolio website that showcases my skills, projects, and provides a way for users to contact me.

## Features

- **Homepage:** The primary landing section that introduces visitors to my site.
- **About Me:** A section where I share a bit about myself, my journey, and my background.
- **Skills:** A comprehensive list of my technical skills and competencies.
- **Contact:** Allows visitors to reach out to me directly from the website.

## Tech Stack

The portfolio website is built using:

- **React**: For building the user interface components.
- **React Hooks**: Utilizing the power of hooks like `useState` and `useEffect` for state management and side effects.
- **Axios**: A promise-based HTTP client for making requests to the backend services.
- **Styled Components**: For styling and theming. This allows for more dynamic styling based on props and theme.
- **Responsive Design**: The design adjusts seamlessly for various screen sizes, ensuring a great user experience on both mobile and desktop.
- **React Router**: For handling page navigation within the app.
- **Theme Provider**: Used to apply global theming based the `theme.js` file.

## Deployment

The portfolio is live and hosted on Vercel. You can visit the live site at:

[https://portfolio-sand-rho-53.vercel.app/](https://portfolio-sand-rho-53.vercel.app/)

## Layout and Animation

The portfolio is designed to provide a smooth user experience, with seamless transitions between sections and interactive animations.

### Main Components:

- **Layout**: The main container for the application that embeds all sections. It utilizes React's `children` prop to render the content dynamically.

- **Navbar & SidebarComponent**: Essential UI elements for navigation and aesthetics.

- **AnimatedSection**: This is a critical component in the UI. Each section (Homepage, About, Skills, Projects, Contact) is wrapped inside an `AnimatedSection` to provide dynamic animations when the section is in the viewport.

### Animations:

The portfolio employs subtle animations using the `styled-components` library in tandem with CSS keyframes. The animations are activated when the respective section comes into view, thanks to the `react-intersection-observer` hook.

- **fadeInUp & fadeInScaleUp**: These keyframe animations provide a combination of fade and motion effects, giving a lively touch to the content as users scroll through the portfolio.

### Styling:

The application is styled using `styled-components`, allowing for dynamic and modular CSS. Components like `LayoutContainer`, `MainContent`, `AnimatedSection`, etc., are styled components that define the look and feel of the application.

Colors and fonts are managed through centralized configurations, ensuring consistent theming and easy updates.

## Project Structure

The main App component sets up the global styles, routing, and overall layout of the website. Routes are defined for the homepage, about me section, skills section, contact section, and a 404 page.

The `SkillsSection` component displays the technologies and skills I've learned, organized by categories. This section fetches the skills data from a backend service (specified by an environment variable) and displays them using styled components.

- **Fetching Data**: Skills data is fetched from a backend service using Axios. The URL for this service is provided by an environment variable `VITE_VERCEL_FETCH_URL`.

- **Dynamic UI Interaction**: Clicking on a skill expands its description, providing more context about the selected technology or skill.

- **Responsive Design**: The skills section, along with its components, is designed to be responsive, adjusting seamlessly to mobile and desktop views.
