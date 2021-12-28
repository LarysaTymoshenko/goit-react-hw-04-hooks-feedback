import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ options, total, persantageFeedback }) => {
  return (
    <ul className={s.list}>
      {Object.keys(options).map((el) => (
        <li className={s.item} key={el}>
          {el}: <span className={`${s.count} ${s[el]}`}>{options[el]}</span>
        </li>
      ))}
      <li className={`${s.item} `}>
        Total: <span className={`${s.count} `}>{total}</span>
      </li>
      <li className={s.item}>
        Positive feedback:{" "}
        <span className={`${s.count} `}>{persantageFeedback}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  persantageFeedback: PropTypes.number.isRequired,
};
export default Statistics;
