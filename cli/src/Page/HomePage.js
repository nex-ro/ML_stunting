import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Why from '../components/Why';
import About from '../components/About';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Collection from '../components/Collection';
import QnA from '../components/QnA';
import Footer from '../components/Footer';
import Break from '../components/Break';

function HomePage() {
  return (
    <div>
      <style>
        {`
          html, body {
            overflow-x: hidden;
            margin: 0;
            font-family: 'Space Grotesk', sans-serif;
            background: linear-gradient(to top, #fff 50%, #e9d2fc);
          }

          /* Scrollbar Customization */
          body::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
          }

          body::-webkit-scrollbar-track {
            background-color: transparent;
          }

          body::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #5101e3, #8300e7, #a900eb, #cc00ee, #eb00f0);
            border-radius: 4px;
          }

          body::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}
      </style>
      <Navbar />
      <Hero id="hero" />
      <Break />
      <Why id="why" />
      <Break />
      <About id="about" />
      <Break />
      <Roadmap id="roadmap" />
      <Break />
      <Team id="team" />
      <Break />
      <Collection id="collection" />
      <Break />
      <QnA id="qna" />
      <Break />
      <Footer />
    </div>
  );
}

export default HomePage;
