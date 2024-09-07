"use client";

import { useState } from "react";

import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import planets from "./planetsInfo.js";
import PlanetCard from "./PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  let numberOfPlanets = selectedPlanets.length;

  const handleAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevSelectedPlanets) => {
      if (prevSelectedPlanets.includes(name)) {
        return prevSelectedPlanets.filter((planet) => planet !== name);
      }
      return [...prevSelectedPlanets, name];
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
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className='card'>
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={() => handleAddOrRemovePlanet(planet.name)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
