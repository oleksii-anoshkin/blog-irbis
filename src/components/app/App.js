import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useLayoutEffect, Fragment } from "react";

import "./App.css";

import Theme from "../theme/Theme";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PostsPage from "../articles/posts/PostsPage";
import PostPage from "../articles/post/PostPage";
import Create from "../Create";

export default function App() {
  const wrapperClass = "wrap";
  const homeId = "all";
  const routesIds = [homeId, "bearings", "filters", "belts"];
  const routes = initRoutes(routesIds, homeId);

  const [isLight, setIsLight] = useState(true);

  useLayoutEffect(() => {
    let done = false;

    if (!done) {
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        setIsLight(false);
    }

    return () => {
      done = true;
    };
  }, []);

  return (
    <>
      <Theme isLight={isLight} parentClass={wrapperClass}>
        <BrowserRouter>
          <Header
            parentClass={wrapperClass}
            linkIds={routesIds}
            homeId={homeId}
          />
          <Main paretnClass={wrapperClass}>
            <Routes>
              {routes.map((route) => (
                <Fragment key={route.id}>
                  <Route
                    path={route.path}
                    element={<PostsPage postsFilter={route.id} />}
                  />
                  <Route path={`${route.path}:id`} element={<PostPage />} />
                </Fragment>
              ))}
              <Route path="/create/" element={<Create />} />
            </Routes>
          </Main>
          <Footer
            parentClass={wrapperClass}
            isLight={isLight}
            setIsLight={setIsLight}
          />
        </BrowserRouter>
      </Theme>
    </>
  );

  function initRoutes(routesIds, homeId) {
    class Route {
      constructor(routeId) {
        this.id = routeId;
        this.path = routeId === homeId ? "/" : `/${routeId}/`;
      }
    }

    return routesIds.map((routeId) => new Route(routeId));
  }
}
