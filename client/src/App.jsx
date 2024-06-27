import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/Home";
import Portfolio from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Nav from "./pages/Nav";
import GameModal from "./pages/GameModal";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  const openGame = () => {
    setIsGameOpen(true);
  };

  const closeGame = () => {
    setIsGameOpen(false);
  };

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        {isGameOpen && <GameModal onClose={closeGame} />}
        <Footer />
        <button className="open-game-button" onClick={openGame}>
          Play a Game?
        </button>
      </div>
    </ApolloProvider>
  );
}

export default App;
