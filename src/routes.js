
// app
import Search from "page/search";

import Projects from "page/projects";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // app routes
  {
    type: "collapse",
    name: "search",
    key: "search",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/app",
    component: <Search />,
  },
  {
    type: "collapse",
    name: "projects",
    key: "projects",
    icon: <Icon fontSize="small">search</Icon>,
    route: "/app/:user",
    component: <Projects />,
  },
];

export default routes;
