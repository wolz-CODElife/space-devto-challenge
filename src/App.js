import React from 'react'
import { BrandicoFacebook, BrandicoInstagram, BrandicoTwitterBird, SystemUiconsSun } from './icons/Icons'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <h2 className="title">Xae</h2>
        <div className="socials">
          <a href="/">
            <BrandicoFacebook />
          </a>
          <a href="/">
            <BrandicoInstagram />
          </a>
          <a href="/">
            <BrandicoTwitterBird />
          </a>
        </div>
      </div>
      <div className="main">
        <div className="nav">
          <a href="/" className="active">Home</a>
          <a href="/" >About</a>
          <a href="/" >Gallery</a>
          <a href="/" >Contact</a>
          <button><SystemUiconsSun /></button>
        </div>
        <div className="hero">
          <h1>Adventure Together</h1>
          <p>Voluptatem, sed asperiores ipsum itaque aliquam omnis dicta nostrum error pariatur sit recusandae unde magni libero repellendus illum alias ratione numquam autem!</p>
        </div>
        <div className="footer">
          <img src="https://i.postimg.cc/DyYttJDh/space.png" alt="space" />
          <div className="note">
            <h3>Exploration</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perspiciatis neque minus consequatur, accusamus itaque?</p>
          </div>
          <div className="note">
            <h3>Exploration</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perspiciatis neque minus consequatur, accusamus itaque?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
