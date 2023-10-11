import React, { Suspense, lazy } from "react";
import { Layout } from "components";
import { Route, Routes } from "react-router-dom";
import { authRoutes, privateRoutes } from "./index";
import { get } from "lodash";
import NotFound from 'pages/not found'
import { Triangle } from "react-loader-spinner";

const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback={<div className="loading"><Triangle
          height="100"
          width="100"
          color="#070F1D"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        /></div>}>{route.element}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};

const routesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        {appRoutes(privateRoutes)}
      </Route>
    </Routes>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default routesWrapper;
