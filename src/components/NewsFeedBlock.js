import React, { lazy, Suspense } from "react";
import Loader from "./Loader";
//  import CardsParent from "./CardsParent";

 const CardsParent=lazy(()=>import('./CardsParent'))

const NewsFeedBlock = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="mt-4 p-5 bg-primary text-white rounded">
          <h1>News Feed</h1>
          <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
             <CardsParent />
            </Suspense>
          
        </div>
      </div>
    </div>
  );
};

export default NewsFeedBlock;
