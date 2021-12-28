import React, { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions.jsx";
import Section from "../Sections/Sections.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import Notification from "../Notification/Notification.jsx";

const types = ["good", "neutral", "bad"];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onSetFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={types} onIncrementFeedback={onSetFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            options={types}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </>
  );
}
