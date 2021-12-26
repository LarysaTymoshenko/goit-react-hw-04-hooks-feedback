import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions.jsx";
import Section from "../Sections/Sections.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import Notification from "../Notification/Notification.jsx";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (feedbackName) => {
    this.setState((prevState) => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback() === 0;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.entries(this.state)}
            onIncrementFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {sum && <Notification message="There is no feedback!" />}
          {!sum && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              persantageFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
