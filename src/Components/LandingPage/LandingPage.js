import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Flashy <span>Studies!</span></h1>
      <section htmlFor="about" className="about">
        <h2>About</h2>
        <p>
          Welcome to flashy studies! A mobile app designed for students
          on the go! (We may save you a few trees a long the way!) 
          Flash cards are an integral part of learning, some might say.
          Well, here at flashy studies we say that anyway. Every students
          has had to spend time writing their flashcards, carrying them around,
          gotten handcramps after writing the thirtieth card that evening...
          Flashy studies is here to alieve those handcramps! Or study rather...
          We aim to provide an online interface for your flashcards! 
        </p>
      </section>
      <section htmlFor="get-started" className="getStarted">
        <h3> How to get started </h3>
        <p>
          For demonstration purposes we have provided you with a starter
          username and password, go ahead poke around!
        </p>
          <h5>Username: UserFlashyStudies</h5>
          <h5>Password: Flashy$tudies22</h5>
      </section>
    </div>
  )
}

export default LandingPage;