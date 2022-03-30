import React from 'react'
import './interest.css'

const Interest = () => {
  return (
    <section id='interest'>
      <h5>More About Me</h5>
      <h2>Interest</h2>

      <div className="container interest__container">
        <article className="interest">
          <div className="interest__head">
            <h3>Teaching</h3>
          </div>

          <p>
            Apart from being a tech enthusiast and a code writer, I also love to teach people what i know
            because i believe in sharing.
          </p>
        </article>

        <article className="interest">
          <div className="interest__head">
            <h3>Music</h3>
          </div>

          <p>
            Listening to refreshing and soothing music is something i can never get over, listening to different playlist
            created by various streaming platforms and listening to the ones 
            i created myself is the best stress reliever that i can get myhands on.
          </p>
        </article>

        <article className="interest">
          <div className="interest__head">
            <h3>Gaming</h3>
          </div>

          <p>
            Aside music, gaming is another activity i get 
            involve in, to relieve stress, to relax and test my reflexes.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Interest