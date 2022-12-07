import React, { lazy, Suspense } from "react";
import LeftBlock from "./LeftBlock";
import Loader from "./Loader";
import NewsFeedBlock from "./NewsFeedBlock";
import RightBlock from "./RightBlock";

const Cards = lazy(() => import("./Cards"));

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <LeftBlock />
            </Suspense>
          </div>

          <div className="col-md-6">
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <NewsFeedBlock />
            </Suspense>
          </div>

          <div className="col-md-3">
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <RightBlock />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
