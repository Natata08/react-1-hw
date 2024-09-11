"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import planets from "./planetsInfo.js";
import PlanetCard from "./PlanetCard";
import PlanetWishlistItem from "./PlanetWishlistItem.js";

export const Destinations = () => {
  // const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  let numberOfPlanets = wishlist.length;

  const handleAddOrRemovePlanet = (name) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(name)) {
        return prevWishlist.filter((planet) => planet !== name);
      }
      return [...prevWishlist, name];
    });
  };

  const removeFromWishlist = (name) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((planet) => planet !== name)
    );
  };

  return (
    <div className='fullBGpicture'>
      <main className='mainContent'>
        <h1>Travel destinations</h1>
        <section className='card'>
          <h2>Wishlist</h2>
          <p>
            You have {numberOfPlanets || "no"} planet
            {numberOfPlanets === 1 ? "" : "s"} in your wishlist
          </p>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}

          {numberOfPlanets && (
            <div>
              <h3>Your current wishlist</h3>
              <ul className={styles.wishlistList}>
                {wishlist.map((planet, index) => (
                  <PlanetWishlistItem
                    key={`planetWishlistItem-${index}`}
                    name={planet}
                    onRemove={() => removeFromWishlist(planet)}
                    thumbnail={`/destination/image-${planet}.png`}
                  />
                ))}
              </ul>
            </div>
          )}
        </section>
        <section className='card'>
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={wishlist.includes(planet.name)}
              onAddOrRemovePlanet={() => handleAddOrRemovePlanet(planet.name)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
