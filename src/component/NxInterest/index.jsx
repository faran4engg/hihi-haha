import React from "react";
import Button from "@material-ui/core/Button";
import "./NxInterest.scss";
const Interests = ({ interestList }) => {
  return (
    <div className="jr-entry-sec">
      <h1 className="jr-fs-md jr-entry-title">Interest</h1>
      <ul className="list-inline list-inline-3">
        {interestList.map((interest) => (
          <li key={interest.id} className="list-inline-item mr-0 mb-2">
            <Button variant="contained" className="jr-btn jr-btn-lg bg-white">
              {interest.interest}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
