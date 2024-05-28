import React from "react";
import PropTypes from "prop-types";


export default function SubHeading({ subHeading }) {
  
  return <p className="page-subtitle">{subHeading}</p>;
}

SubHeading.propTypes = {
  subHeading: PropTypes.string.isRequired
};