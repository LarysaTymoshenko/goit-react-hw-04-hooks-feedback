import React from "react";
import PropTypes from "prop-types";
import s from "./Buttons.module.css";

const Buttons = ({ onIncrementFeedback, feedbackName }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => onIncrementFeedback(feedbackName)}
        className={s.button}
      >
        {feedbackName}
      </button>
    </>
  );
};

Buttons.propTypes = {
  feedbackName: PropTypes.string.isRequired,
  onIncrementFeedback: PropTypes.func.isRequired,
};

export default Buttons;
