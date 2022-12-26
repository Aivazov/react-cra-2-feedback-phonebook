import React from 'react';
import '../Statistics/Statistics.module.css';
import { Component } from './Statistics.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackCountComponent = ({
  goodState,
  neutralState,
  badState,
  feedbackCounterState,
  feedbackPersentageState,
}) => (
  <div>
    <p>Good: {goodState}</p>
    <p>Neutral: {neutralState}</p>
    <p>Bad: {badState}</p>
    <p>Total: {feedbackCounterState}</p>
    <p>
      Positive Feedback percentage:{' '}
      {goodState === 0 ? '0' : feedbackPersentageState}%
    </p>
  </div>
);

export default FeedbackCountComponent;
