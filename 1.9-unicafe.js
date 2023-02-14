import React, { useState } from "react";

const Good = ({ good }) => <p>good {good}</p>;
const Neutral = ({ neutral }) => <p>neutral {neutral}</p>;
const Bad = ({ bad }) => <p>bad {bad}</p>;
const All = ({ good, neutral, bad }) => (
    <p>all {good + neutral + bad}</p>
);

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const totalFeedback = good + neutral + bad;
    const average = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
    const positive = totalFeedback > 0 ? good / totalFeedback * 100 : 0;

    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            {totalFeedback > 0 && (
                <div>
                    <h1>statistics</h1>

                    <Good good={good} />
                    <Neutral neutral={neutral} />
                    <Bad bad={bad} />
                    <All good={good} neutral={neutral} bad={bad} />

                    <h2>average and positive</h2>

                    <p>average {average}%</p>
                    <p>positive {positive}%</p>
                </div>
            )}
        </div>
    );
};

export default App;
