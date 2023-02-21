import React, { Fragment, Suspense } from "react";
import AppRoutes from "./app-routes";
import { Routes, Route } from "react-router-dom";
import { RoutesProps } from "models/routes";

export function RenderRoutes(routes: RoutesProps[]) {
  return (
    <Suspense fallback={null}>
      <Routes>
        {routes.map((route) => {
          const Component = route.component || Fragment;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          return (
            <React.Fragment key={route.path}>
              {route.routes ? (
                route.routes.map((route) => {
                  const NestedComponent = route.component || Fragment;
                  const NestedGuard = route.guard || Fragment;
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                          <Guard>
                            <Layout>
                              <NestedGuard>
                                <NestedComponent/>
                              </NestedGuard>
                            </Layout>
                          </Guard>
                      }
                    />
                  );
                })
              ) : (
                <Route
                  path={route.path}
                  element={
                      <Guard>
                        <Layout>
                          <Component />
                        </Layout>
                      </Guard>
                  }
                />
              )}
            </React.Fragment>
          );
        })}
      </Routes>
    </Suspense>
  );
}

const routes: any = [
  AppRoutes,
  {
    path: "*",
    component: ()=><>Not Found</>
  }
];

export default routes;
