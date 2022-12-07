import React, { lazy, Suspense } from "react";
//import Cards from "./Cards";
import img1 from "../images/nature1.jpg";
import Loader from "./Loader";

const Cards = lazy(() =>import("./Cards"));

const CardsParent = () => {
  return (
    <div>
      <Suspense fallback={<div><Loader /></div>}>
        <Cards userName={"Ranganath"} image={img1} />
        <br />
        <Cards userName={"Praveen"} image={img1} />
        <br />
        <Cards userName={"Krishna"} image={img1} />
        <br />
        <Cards userName={"Prabhu"} image={img1} />
      </Suspense>
    </div>
  );
};

export default CardsParent;
