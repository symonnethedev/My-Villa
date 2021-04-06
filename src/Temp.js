import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={require("./images/4.jpg")}
          title="Luxurious Experiences"
          description="Lavish modern villa"
        />
        <Card
          src="https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
          title="Unforgettable stays"
          description="Deluxe villa with spacious rooms."
        />
        <Card
          src="https://unsplash.com/photos/g39p1kDjvSY"
          title="10 Bedroom stylish villa"
          description="Elegant decor with amazing views."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://unsplash.com/photos/MXbM1NrRqtI"
          title="6 Bedroom luxury villa"
          description="Beautiful villa with a stunning views"
          price="£558/night"
        />
        <Card
          src="https://unsplash.com/photos/2d4lAQAlbDA"
          title="4 Bedroom Villa"
          description="stylish contemporary villa"
          price="£350/night"
        />
        <Card
          src=".https://unsplash.com/photos/_TPTXZd9mOo"
          title="5 Bedroom Villa "
          description="Beautiful modern villa"
          price="£428/night"
        />
      </div>
    </div>
  );
}

export default Home;
