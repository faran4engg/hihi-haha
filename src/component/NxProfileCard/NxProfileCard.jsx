import React from "react";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import "./profile.scss";

const NxProfileCard = () => {
  return (
    <div className="nx-card text-center">
      <div className={`nx-card-header-color`}>
        <img
          className="rounded-circle size-90 avatar-shadow mb-3"
          src="https://via.placeholder.com/150x150"
          alt="Team Member"
        />

        <div className="nx-card-hd-content">
          <h5 className="mb-0 text-white">Faran Shaikh</h5>
          <p className="nx-fs-sm mb-0 text-grey text-lighten-2">
            Front End Developer
          </p>
        </div>
        <Fab className="nx-send">
          <SendIcon />
        </Fab>
      </div>
      <div className="nx-card-body pt-2">
        <p className="card-text">
          Cenas in erat accumsan, hendrerit lorem vel, pulvinar odio. Quisque eu
          conva.
        </p>
      </div>
    </div>
  );
};

export default NxProfileCard;
