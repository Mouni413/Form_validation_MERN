import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./index.css";
const TimeLine = () => {
  return (
    <div className="time-line-container">
      <h1 className="time-line-container-heading">
        What my clients think about me
      </h1>
      <h1 className="time-line-container-heading-two">
        My
        <span className="time-line-container-heading-two-span"> CV Resume</span>
      </h1>
      <div className="time-line-container-elements">
        <div className="time-line-container-element-one">
          <h1 className="time-line-title">Education</h1>
          <VerticalTimeline
            className="vertical-time-line"
            layout="1-column-left"
            lineColor="black"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "10px",
                boxShadow: "0 0 4px 8px rgba(0,0,0,0.1)",
              }}
              date=" 2014 - 2016"
              iconStyle={{
                background: "#7D6AE9",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
              }}
              icon={<div />}
              position="right"
              contentArrowStyle={{ display: "none" }}
            >
              <h3 className="vertical-timeline-element-title">
                Oxford University
              </h3>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuidling
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "10px",
                boxShadow: "0 0 4px 8px rgba(0,0,0,0.1)",
              }}
              date=" 2010 - 2014"
              iconStyle={{
                background: "#7D6AE9",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
              }}
              icon={<div />}
              position="right"
              contentArrowStyle={{ display: "none" }}
            >
              <h3 className="vertical-timeline-element-title">
                Higher School Graduation
              </h3>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuidling
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="time-line-container-element-two">
          <h1 className="time-line-title">Experience</h1>
          <VerticalTimeline
            className="vertical-time-line"
            layout="1-column-left"
            lineColor="black"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "10px",
                boxShadow: "0 0 4px 8px rgba(0,0,0,0.1)",
              }}
              date=" 2017 - Now"
              iconStyle={{
                background: "#7D6AE9",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
              }}
              icon={<div />}
              position="right"
              contentArrowStyle={{ display: "none" }}
            >
              <h3 className="vertical-timeline-element-title">
                Web Designer - Envato
              </h3>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuidling
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "white",
                color: "black",
                borderRadius: "10px",
                boxShadow: "0 0 4px 8px rgba(0,0,0,0.1)",
              }}
              date=" 2015 - 2017"
              iconStyle={{
                background: "#7D6AE9",
                color: "#fff",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "10px",
              }}
              icon={<div />}
              position="right"
              contentArrowStyle={{ display: "none" }}
            >
              <h3 className="vertical-timeline-element-title">
                Developer - Zhinc Studio
              </h3>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuidling
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
