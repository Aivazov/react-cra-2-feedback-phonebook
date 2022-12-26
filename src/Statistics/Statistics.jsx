import React from 'react';
import Controls from './Controls';
import FeedbackCountComponent from './FeedbackCountComponent';
// import css from './Statistics.module.css';
import '../Statistics/Statistics.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from './Statistics.styled';

class Statistics extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   }; //this expression will be transpiled by Babel so this is a derpecaded way of use
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleClickGood = () => {
  //   // this.setState({
  //   //   good: 1,
  //   // });

  //   this.setState((previous) => {
  //     return {
  //       good: previous.good + 1,
  //     };
  //   });
  // };

  // handleClickNeutral = () => {
  //   this.setState((previous) => ({
  //     neutral: previous.neutral + 1, //without return operator
  //   }));
  // };

  // handleClickBad = () => {
  //   this.setState((previous) => ({
  //     bad: previous.bad + 1, //without return operator
  //   }));
  // };

  onFeedbackBtnClick = (event) => {
    const stateElement = event.target.textContent.toLowerCase();
    console.dir(stateElement);
    this.setState((previous) => ({
      [stateElement]: previous[stateElement] + 1,
    }));
  };

  countTotalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad; hardcore and silly method
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackCounter = this.countTotalFeedback();
    const feedbackPersentage = this.countPositiveFeedbackPercentage();
    // console.log(Object.keys(this.state).length);

    return (
      <div className="Statistics">
        <h1 className=" mb-3">Please leave feedback</h1>
        <Component className=" mb-4">
          <Controls
            onClickGood={this.onFeedbackBtnClick}
            onClickNeutral={this.onFeedbackBtnClick}
            onClickBad={this.onFeedbackBtnClick}
            // onClickGood={this.handleClickGood}
            // onClickNeutral={this.handleClickNeutral}
            // onClickBad={this.handleClickBad}
          />
          {/* <button hardcore
            type="button"
            // className="btn btn-primary {css.btnStatistics}"
            className="btn btn-dark"
            // onClick={this.handleClickGood}
            onClick={this.onFeedbackBtnClick}
          >
            Good
          </button>
          <button
            type="button"
            className="btn btn-dark"
            // onClick={this.handleClickNeutral}
            onClick={this.onFeedbackBtnClick}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btn btn-dark"
            // onClick={this.handleClickBad}
            onClick={this.onFeedbackBtnClick}
          >
            Bad
          </button> */}
        </Component>
        <h1 className=" mb-3">Statistics</h1>

        {/* conditional render */}
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <FeedbackCountComponent
            goodState={good}
            neutralState={neutral}
            badState={bad}
            feedbackCounterState={feedbackCounter}
            feedbackPersentageState={feedbackPersentage}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}

export default Statistics;
