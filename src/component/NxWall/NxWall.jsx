import React from "react";
import NxProfileCard from "../NxProfileCard/NxProfileCard";
import NxTimeLine from "../NxTimeLine";

const Wall = () => (
  <div className="container">
    <div className="row">
      <div className=" d-sm-block col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <NxProfileCard />
      </div>
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <NxTimeLine />
      </div>
    </div>
  </div>
);

export default Wall;
