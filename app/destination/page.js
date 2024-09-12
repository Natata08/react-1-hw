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

  const isPlanetSelected = (wishlist, planetName) =>
    wishlist.some((item) => item.name === planetName);

  const handleAddOrRemovePlanet = (name, thumbnail) => {
    setWishlist((prevWishlist) => {
      if (isPlanetSelected(prevWishlist, name)) {
        return prevWishlist.filter((planet) => planet.name !== name);
      }
      return [...prevWishlist, { name: name, thumbnail: thumbnail }];
    });
  };

  const removeFromWishlist = (name) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((planet) => planet.name !== name)
    );
  };

  const handleAddCustomPlanet = (name, thumbnail) => {
    setWishlist((prevWishlist) => [
      ...prevWishlist,
      { name: name, thumbnail: thumbnail },
    ]);
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
          <AddWishlistItem onAddWishlistItem={handleAddCustomPlanet} />
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
                    name={planet.name}
                    onRemove={() => removeFromWishlist(planet.name)}
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
              isSelected={isPlanetSelected(wishlist, name)}
              onAddOrRemovePlanet={() =>
                handleAddOrRemovePlanet(name, thumbnail)
              }
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
