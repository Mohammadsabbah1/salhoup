import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom"; // Keep using Switch
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  const location = useLocation(); // Get the current location

  return (
    <Suspense fallback={null}>
      <Styles />
      
      {/* Conditionally render Header and Footer */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/dashboard"  && <Header />}

      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact // You may want to ensure that exact is included if needed
              component={lazy(() => import(`../pages/${routeItem.component}`))} // Use component prop
            />
          );
        })}
      </Switch>

      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/dashboard" && <Footer />}
      </Suspense>
  );
};

export default Router;
