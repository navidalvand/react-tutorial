import React from "react";
import ReactDOM from "react-dom/client";

function Avatar() {
  return <img className="avatar" src="#" alt="imagep" />;
}

function Intro() {
  return (
    <div className="intro">
      <h3>Joooon</h3>
      <p>Jooon Monnn</p>
    </div>
  );
}

function SkillList() {}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <Card />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
