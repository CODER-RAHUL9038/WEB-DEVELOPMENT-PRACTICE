import { useEffect, useState } from "react";
import "./Joker.css";

export default function Joker() {
  const [joke, setJoke] = useState({});

  const getNewJoke = async () => {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=twopart"
    );
    const data = await res.json();

    setJoke({
      setup: data.setup,
      delivery: data.delivery,
    });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <main className="page">
      <section className="joke-page">
        <h1 className="app-title">Jokes</h1>

        <article className="joke-content">
          <p className="setup">{joke.setup}</p>
          <p className="delivery">{joke.delivery}</p>
        </article>

        <button className="next-btn" onClick={getNewJoke}>
          Show another joke
        </button>
      </section>
    </main>
  );
}
