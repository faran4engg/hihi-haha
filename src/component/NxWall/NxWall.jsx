import React from "react";
import NxProfileCard from "../NxProfileCard/NxProfileCard";
import NxTimeLine from "../NxTimeLine";
import NxInterest from "../NxInterest/index";
import { interestList } from "../NxInterest/Data";

const Wall = () => (
  <div className="container">
    <div className="row">
      <div className=" d-sm-block col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <NxProfileCard />
        <NxInterest interestList={interestList} />
      </div>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <NxTimeLine />
      </div>
    </div>
  </div>
);

export default Wall;
