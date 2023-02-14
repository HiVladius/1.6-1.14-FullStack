import React, { useEffect, useState } from 'react'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = () => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelected((selected + 1) % anecdotes.length)
        }, 10000)
        return () => clearInterval(intervalId)
    }, 
    [selected])

    const getMostVotedAnecdote = () => {
        return votes.indexOf(Math.max(...votes))
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Votes: {votes[selected]}</p>
            <button onClick={handleVote}>Vote</button>
            <button onClick={handleClick}> Show Anecdote </button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[getMostVotedAnecdote()]}</p>
            <p>Votes: {votes[getMostVotedAnecdote()]}</p>
        </div>
    )

}
export default App;
