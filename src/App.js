import { useEffect } from 'react';

// react-router components
import { Routes, Route, Navigate } from "react-router-dom";


// Material Dashboard 2 React routes
import routes from "routes";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

export default function App() {
	useEffect(() => {
		document.title = 'Api GitHub';
	});
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return(
    <ThemeProvider theme={theme}>
		<Routes>
			{getRoutes(routes)}
			<Route path="*" element={<Navigate to="/app" />} />
		</Routes>
    </ThemeProvider>
  );
}
