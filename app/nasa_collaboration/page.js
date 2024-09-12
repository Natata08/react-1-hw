"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "@/app/nasa_collaboration/RoverPhoto.js";

const API_KEY = "2eEgBxfpeJ5OWMjYv0eMUOhxoWjLOaYjdoe0euHO";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      setIsLoading(true);
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto);
        if (roverPhotoResponse.ok) {
          const result = await roverPhotoResponse.json();
          setRoverPhoto(result);
        } else {
          setError("Failed to load rover photos");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchAstronomyPicOfTheDay = async () => {
      const astronomyPicOfTheDayResponse = await fetch(
        NASA_URLs.astronomyPicOfTheDay
      ).then((response) => response.json());
      setDailyImg(astronomyPicOfTheDayResponse);
    };

    fetchAstronomyPicOfTheDay();
    fetchRoverPhotos();
  }, []);

  const renderRoverPhotosContent = () => {
    if (isLoading) {
      return <p>Loading rover photos...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (roverPhoto?.photos?.length) {
      return (
        <ul className={styles.roverPhotos}>
          {roverPhoto.photos.map((photo, index) => (
            <RoverPhoto
              key={`roverPhoto-${index}`}
              src={photo.img_src}
              date={photo.earth_date}
              roverName={photo.rover.name}
            />
          ))}
        </ul>
      );
    }
  };

  return (
    <div className='fullBGpicture'>
      <main className='mainContent'>
        <h1>Collaboration with NASA</h1>
        <section className='card'>
          <h2>Astronomy Picture of the day</h2>
          {dailyImg.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={`NASA photo of ${dailyImg.title}`}
              />
              <p className={styles.explanation}>{dailyImg.explanation}</p>
            </>
          ) : (
            <p>Loading astronomy picture of the day...</p>
          )}
        </section>

        <section className='card'>
          <h2>Rover Photos</h2>
          {renderRoverPhotosContent()}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
