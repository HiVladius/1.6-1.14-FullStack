import React, { useState } from "react";
import './App.css';

const Button = ({ text, handleClick }) => (
    <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total || 0;
    const positive = (good / total) * 100 || 0;

    return (
        <table className="statistics-table">
            <thead>
                <tr>
                    <th>Feedback</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>Positive Feedback</td>
                    <td>{positive}%</td>
                </tr>
            </tbody>
        </table>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="Good" handleClick={() => setGood(good + 1)} />
            <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
            <Button text="Bad" handleClick={() => setBad(bad + 1)} />

            <h1>Statistics</h1>
            {good + neutral + bad > 0 ? (
                <Statistics good={good} neutral={neutral} bad={bad} />
            ) : (
                <p>No feedback given</p>
            )}
        </div>
    );
};

export default App;
