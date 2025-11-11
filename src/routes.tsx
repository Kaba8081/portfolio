import { createBrowserRouter } from 'react-router';

import LandingPage from './pages/LandingPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    path: '',
    Component: Layout,
    children: [
    {
      path: "/",
      element: <LandingPage />,
      handle: { name: "LandingPage.html", breadcrumbPath: ["home", "portfolio"] },
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
      handle: { name: "Projects.html", breadcrumbPath: ["home", "portfolio"] },
    },
    {
      path: "/experience",
      element: <ExperiencePage />,
      handle: { name: "Experience.html", breadcrumbPath: ["home", "portfolio"] },
    },
  ]},
//   {
//     path: "/projects/:projectName",
//     element: <ProjectOne />,
//     handle: (match) => ({
//       name: `${match.params.projectName}.html`,
//       breadcrumbPath: ["home", "portfolio", "projects"],
//     }),
//   },
]);