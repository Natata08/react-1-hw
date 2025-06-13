"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import planets from "./planetsInfo.js";
import PlanetCard from "./PlanetCard";
import PlanetWishlistItem from "./PlanetWishlistItem.js";

export const Destinations = () => {
  const [wishlist, setWishlist] = useState([]);

  let numberOfPlanets = wishlist.length;

  const isPlanetSelected = (planetName) =>
    wishlist.some((item) => item.name === planetName);

  const handleWishlistUpdate = (name, thumbnail = null, onRemove = false) => {
    setWishlist((prevWishlist) => {
      if (onRemove) {
        return prevWishlist.filter((planet) => planet.name !== name);
      } else {
        if (!isPlanetSelected(name)) {
          return [...prevWishlist, { name, thumbnail }];
        }
        return prevWishlist;
      }
    });
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
          <AddWishlistItem onAddWishlistItem={handleWishlistUpdate} />

          {numberOfPlanets > 0 && (
            <div>
              <h3>Your current wishlist</h3>
              <ul className={styles.wishlistList}>
                {wishlist.map((planet, index) => (
                  <PlanetWishlistItem
                    key={`planetWishlistItem-${index}`}
                    name={planet.name}
                    onRemove={() =>
                      handleWishlistUpdate(planet.name, null, true)
                    }
                    thumbnail={planet.thumbnail}
                  />
                ))}
              </ul>
            </div>
          )}
        </section>
        <section className='card'>
          <h2>Possible destinations</h2>
          {planets.map(({ name, description, thumbnail }, index) => (
            <PlanetCard
              key={`planetCard-${index}`}
              name={name}
              description={description}
              thumbnail={thumbnail}
              isSelected={isPlanetSelected(name)}
              onAddOrRemovePlanet={() =>
                handleWishlistUpdate(name, thumbnail, isPlanetSelected(name))
              }
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
