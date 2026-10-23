import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.text();
      })
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage("Unable to connect to the backend.");
      });
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <h1>🍔 FoodieHub</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h2>Delicious Food, Delivered Fresh!</h2>
            <p>
              Discover your favourite meals and enjoy delicious food
              delivered right to your doorstep.
            </p>
            <a href="#menu" className="order-btn">
              Explore Menu
            </a>
          </div>
        </section>

        <section className="menu" id="menu">
          <h2>Our Popular Dishes</h2>

          <div className="food-container">
            <div className="food-card">
              <div className="food-image">🍕</div>
              <h3>Cheese Pizza</h3>
              <p>Freshly baked pizza with delicious cheese.</p>
              <h4>₹199</h4>
              <button>Order Now</button>
            </div>

            <div className="food-card">
              <div className="food-image">🍔</div>
              <h3>Classic Burger</h3>
              <p>Juicy burger with fresh vegetables.</p>
              <h4>₹149</h4>
              <button>Order Now</button>
            </div>

            <div className="food-card">
              <div className="food-image">🍜</div>
              <h3>Veg Noodles</h3>
              <p>Hot noodles prepared with fresh ingredients.</p>
              <h4>₹129</h4>
              <button>Order Now</button>
            </div>
          </div>
        </section>

        <section className="backend-status">
          <h3>Backend Connection</h3>
          <p>{message}</p>
        </section>
      </main>

      <footer>
        <p>© 2026 FoodieHub | Made with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
