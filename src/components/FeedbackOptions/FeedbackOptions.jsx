import React from "react";
import PropTypes from "prop-types";
import Buttons from "../Buttons/Buttons.jsx";
import s from "./Feedback.module.css";

export default function FeedbackOptions({ options, onIncrementFeedback }) {
  return (
    <ul className={s.list}>
      {options.map((key) => (
        <li key={key} className={s.item}>
          <Buttons
            feedbackName={key}
            onIncrementFeedback={onIncrementFeedback}
          />
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onIncrementFeedback: PropTypes.func.isRequired,
};
