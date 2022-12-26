import React from 'react';
import '../Statistics/Statistics.module.css';
import { Component } from './Statistics.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

const Controls = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <Component>
    <button
      type="button"
      // className="btn btn-primary {css.btnStatistics}"
      className="btn btn-dark"
      onClick={onClickGood}
    >
      Good
    </button>
    <button type="button" className="btn btn-dark" onClick={onClickNeutral}>
      Neutral
    </button>
    <button type="button" className="btn btn-dark" onClick={onClickBad}>
      Bad
    </button>
  </Component>
);

export default Controls;
