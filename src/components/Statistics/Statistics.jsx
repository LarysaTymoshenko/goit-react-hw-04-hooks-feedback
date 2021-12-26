import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, persantageFeedback }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.itemName}> Good:</p>
        <span className={s.count}>{good} </span>
      </li>
      <li className={s.item}>
        <p className={s.itemName}>Neutral:</p>
        <span className={s.count}>{neutral}</span>
      </li>
      <li className={s.item}>
        <p className={s.itemName}>Bad:</p>
        <span className={s.count}>{bad}</span>
      </li>
      <li className={s.item}>
        <p className={s.itemName}>Total:</p>
        <span className={s.count}>{total()}</span>
      </li>
      <li className={s.item}>
        <p className={s.itemName}>Positive:</p>
        <span className={s.count}>{persantageFeedback()} %</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  persantageFeedback: PropTypes.func.isRequired,
};
export default Statistics;
