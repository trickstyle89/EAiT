import React, { useState, useEffect } from "react";
import "../../scss/homePage.scss";

import Typist from "react-text-typist";
import ActionAreaCard from "./HomePageCards";
import HomePageCard from "./HomePageCards2";
import Navbar from "../Navbar";

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 4000);
  }, []);

  return (
    <div className="homepage">
      <Navbar></Navbar>
      <div className="bg-img">
        <div className="content">
          <div className="type">
            <Typist
              className={"myTypist"}
              typingSpeed={55}
              showCursor={false}
              sentences={[
                "Unleash endless culinary possibilities with AI-powered recipes...",
              ]}
              loop={false}
            />
          </div>
          <div className="text-button">
            <p className={fadeIn ? "fade-in" : ""}>
              Let our AI be your kitchen assistant.
            </p>
            <a href="/preferences">
              <button className={`btn ${fadeIn ? "fade-in" : ""}`}>
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="action-card-area">
        <h2>Don't have much time?</h2>
        <h3>Take a look at our quick recipes</h3>
        <div className="action-card-area__cards-container">
          <ActionAreaCard
            title="Buttermilk Pancakes"
            description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
            image="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="alt 1"
          />
          <ActionAreaCard
            title="Spring Salad"
            description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
            image="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="alt 2"
          />
          <ActionAreaCard
            title="Lupita's tacos"
            description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
            image="https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="alt 3"
          />
        </div>
        <div className="tagline">
          <h3>Say goodbye to mealtime boredom with our AI-powered recipes.</h3>
        </div>
        <div className="action-card-area">
          <h3>How it works</h3>
          <div className="how-to-steps">
            <HomePageCard
              alt="Step 1"
              title="Select your preferences"
              description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
              image="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
            <HomePageCard
              alt="Step 2"
              title="Select your ingredients"
              description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
              image="https://images.unsplash.com/photo-1514516870926-20598973e480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            />
            <HomePageCard
              alt="Step 3"
              title="Get unique recipes"
              description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
              image="https://plus.unsplash.com/premium_photo-1661507070247-1ed0a6ed3ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tib29rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
            <HomePageCard
              alt="Step 4"
              title="Add the title here"
              description="Lorem ipsum dolor sit amet. Aut suscipit molestiae quo culpa voluptatibus sed reiciendis earum"
              image="https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>EAiT &copy; 2023</p>
      </footer>
    </div>
  );
};

export default HomePage;
