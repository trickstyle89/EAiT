import React, { useState, useEffect } from "react";
import "../../scss/homePage.scss";

import Typist from "react-text-typist";
import ActionAreaCard from "./HomePageCards";
import HomePageCard from "./HomePageCards2";


const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 3250);
  }, []);

  return (
    <div className="homepage">
      <div className="bg-img">
        <div className="content">
          <div className="type">
            <Typist
              className={"myTypist"}
              typingSpeed={45}
              showCursor={false}
              sentences={[
                "Unleash endless culinary possibilities with AI-powered recipes...",
              ]}
              loop={false}
            />
          </div>
          <div className="text-button">
            <p className={fadeIn ? "fade-in" : ""}>
              Let AI help you EAiT better
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
        <h3>Take a look at our quick recipes</h3>
        <div className="action-card-area__cards-container">
          <ActionAreaCard
            title="Garlic Roasted Potatoes"
            image="https://images.unsplash.com/photo-1631898039984-fd5f61fe8732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            description="Crispy roasted potatoes seasoned to perfection with a delicious blend of garlic and aromatic herbs, creating a savory and satisfying side dish."
            alt="alt 1"
          />
          <ActionAreaCard
            title="Spring Salad with Shrimp"
            description="A refreshing mix of greens, watermelon, blueberries, feta cheese, and grilled shrimp, perfect for a light and healthy meal."
            image="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="alt 2"
          />
          <ActionAreaCard
            title="Tacos al Pastor"
            description="A traditional Mexican dish consisting of marinated pork, cooked on a spit, and served on a soft corn tortilla with pineapple, onions, and cilantro."
            image="https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/05/al-pastor-3507w.jpg"
            alt="alt 3"
          />
        </div>
        <div className="tagline">
          <h3>Say goodbye to mealtime boredom with our AI-powered recipes.</h3>
        </div>
        <div className="action-card-area">
          <h3>How it works:</h3>
          <div className="how-to-steps">
            <HomePageCard
              alt="Step 1"
              title="Choose your preferences"
              description="Select the options that best fit your personal tastes and needs."
              image="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
            <HomePageCard
              alt="Step 2"
              title="Select your ingredients"
              description="Choose the specific food ingredients that you want to use in your recipe"
              image="https://images.unsplash.com/photo-1514516870926-20598973e480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            />
            <HomePageCard
              alt="Step 3"
              title="Recieve unique recipes"
              description="Get customized recipe suggestions tailored to your specific preferences and ingredient selections."
              image="https://plus.unsplash.com/premium_photo-1661507070247-1ed0a6ed3ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tib29rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            />
            <HomePageCard
              alt="Step 4"
              title="Create delicious meals"
              description="Unleash your inner chef and create mouth-watering meals with ease."
              image="https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
