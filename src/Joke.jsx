import './Joke.css'

function Joke(joke) {
  return (
    <>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <p><small>Category: {joke.type}</small></p>
    </>
  )
}

export default Joke