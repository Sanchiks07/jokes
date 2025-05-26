import './Joke.css'

function Joke(joke) {
  return (
    <>
      <div className="joke-container">
        <p><strong>{joke.setup}</strong></p>
        <p>{joke.punchline}</p>
        <p><small>Category: {joke.type}</small></p>
      </div>
    </>
  )
}

export default Joke