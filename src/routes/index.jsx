import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const ServiceInfo = lazy(() => import("pages/service-info"))
const ProjectInfo = lazy(() => import("pages/project-info"))
const Portfolio = lazy(() => import("pages/portfolio"))
const About = lazy(() => import("pages/about"))
const Contact = lazy(() => import("pages/contact"))
const Services = lazy(() => import("pages/services"))
const Job = lazy(()=> import("pages/job"))
const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service-info/:name",
    element: <ServiceInfo />,
  },
  {
    path: "/project-info/:id",
    element: <ProjectInfo />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/job",
    element: <Job />,
  },
];

export { authRoutes, privateRoutes };
