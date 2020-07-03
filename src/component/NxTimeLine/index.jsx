import React from "react";
import timeLineData from "./timeLineData";
import TimeLineItem from "./TimeLineItem";

import {
  Accessible,
  AccountCircle,
  AddShoppingCart,
  EventSeat,
  Tablet,
} from "@material-ui/icons";

const NxTimeLine = () => {
  return (
    <div id="nx-timeline">
      <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
        <TimeLineItem timeLine={timeLineData[0]} color="pink">
          <EventSeat />
        </TimeLineItem>
        <TimeLineItem
          styleName="timeline-inverted"
          timeLine={timeLineData[1]}
          color="purple"
        >
          <Tablet />
        </TimeLineItem>
        <TimeLineItem timeLine={timeLineData[2]} color="green">
          <Accessible />
        </TimeLineItem>
        <TimeLineItem
          styleName="timeline-inverted"
          timeLine={timeLineData[3]}
          color="red"
        >
          <AccountCircle />
        </TimeLineItem>
        <TimeLineItem timeLine={timeLineData[4]} color="amber">
          <AddShoppingCart />
        </TimeLineItem>
      </div>
    </div>
  );
};

export default NxTimeLine;
