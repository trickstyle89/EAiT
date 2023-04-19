import React, { useState, useEffect } from 'react';
import '../scss/homePage.scss';

import Typist from 'react-text-typist';
import ActionAreaCard from './HomePageCards';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 4000);
  }, []);
  return (
    <div className="homepage">
      <nav className="navbar">
        <a className="logo" href="/">EAiT</a>
        <a href="/recipes"><button className="btn-nav">Get Started</button></a>
      </nav>
      <div className="bg-img">
        <div className="content">
          <div className='type'>
            <Typist className={'myTypist'} typingSpeed={60} showCursor={false} sentences={['Unleash endless culinary possibilities with AI-powered recipes...']} loop={false} />
          </div>
          <p className={fadeIn ? 'fade-in' : ''}>
            Let our AI be your kitchen assistant.
          </p>
          <a href="/recipes"><button className="btn">Get Started</button></a>
        </div>
      </div>
      <div className="action-card-area">
        <h2>Don't have much time?</h2>
        <h3>Take a look at our quick recipes</h3>
        <div className="action-card-area__cards-container">
          <ActionAreaCard
            title="Title 1"
            description="Description 3Description 3Description 3Description 3Description 3Description 3"
            image="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="alt 1"
          />
          <ActionAreaCard
            title="Title 2"
            description="Description 3Description 3Description 3Description 3Description 3Description 3"
            image="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="alt 2"
          />
          <ActionAreaCard
            title="Lupita's tacos"
            description="Best tacos Description 3Description 3Description 3Description"
            image="https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="alt 3"
          />
        </div>

      </div>
      <footer className="footer">
        <p>EAiT &copy; 2023</p>
      </footer>
    </div>
  );
}



export default HomePage;
