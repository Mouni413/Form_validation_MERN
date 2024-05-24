import React from "react";
import "./index.css";
import { FaArrowRightLong } from "react-icons/fa6";

const WorkSection = () => {
  return (
    <div className="work-container-section">
      <h1 className="work-container-heading">Visit My Portofolio</h1>
      <h1 className="work-container-main-heading">
        My
        <span className="work-container-main-heading-span">Amazing Work</span>
      </h1>
      <div className="work-container-card">
        <div className="work-container-card-one">
          <div className="work-container-card-one-one"></div>
          <pre className="work-container-card-one-heading">
            The Service Provide For
            <br />
            The Design Project
          </pre>
          <pre className="work-container-card-one-description">
            I use animation as a third dimension by which
            <br />
            to simplify experiences and kuiding
          </pre>
          <button className="work-container-card-one-button">
            Learn More <FaArrowRightLong className="icon-arrow-right" />
          </button>
        </div>
        <div className="work-container-card-two">
          <div
            className="work-container-card-two-cards"
            style={{ marginBottom: "10px" }}
          >
            <h1 className="work-container-card-one-heading">
              Mobile App Landing
            </h1>
            <pre className="work-container-card-one-description">
              Mobile App Landing I use animation as a third dimension by which
              <br />
              to simplify experiences and kuiding
            </pre>
            <button className="work-container-card-one-button">
              Button <FaArrowRightLong className="icon-arrow-right" />
            </button>
          </div>
          <div
            className="work-container-card-two-cards"
            style={{ marginTop: "30px" }}
          >
            <h1 className="work-container-card-one-heading">
              Mobile App Landing
            </h1>
            <pre className="work-container-card-one-description">
              Mobile App Landing I use animation as a third dimension by which
              <br />
              to simplify experiences and kuiding
            </pre>
            <button className="work-container-card-one-button">
              Button <FaArrowRightLong className="icon-arrow-right" />
            </button>
          </div>
        </div>
        <div className="work-container-card-three"></div>
      </div>
    </div>
  );
};

export default WorkSection;
