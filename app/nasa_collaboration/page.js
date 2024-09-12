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

  const [isLoadingDailyImg, setIsLoadingDailyImg] = useState(false);
  const [isLoadingRover, setIsLoadingRover] = useState(false);

  const [dailyImgError, setDailyImgError] = useState("");
  const [roverError, setRoverError] = useState("");

  useEffect(() => {
    const fetchDailyImg = async () => {
      setIsLoadingDailyImg(true);
      try {
        const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
        if (dailyImgResponse.ok) {
          const result = await dailyImgResponse.json();
          setDailyImg(result);
        } else {
          setDailyImgError("Failed to load astronomy picture of the day");
        }
      } catch (error) {
        setDailyImgError(error.message);
      } finally {
        setIsLoadingDailyImg(false);
      }
    };

    fetchDailyImg();
  }, []);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      setIsLoadingRover(true);
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto);
        if (roverPhotoResponse.ok) {
          const result = await roverPhotoResponse.json();
          setRoverPhoto(result);
        } else {
          setRoverError("Failed to load rover photos");
        }
      } catch (error) {
        setRoverError(error.message);
      } finally {
        setIsLoadingRover(false);
      }
    };
    fetchRoverPhotos();
  }, []);

  const renderDailyImageContent = () => {
    if (isLoadingDailyImg) {
      return <p>Loading astronomy picture of the day...</p>;
    }

    if (dailyImgError) {
      return <p>Error: {dailyImgError}</p>;
    }

    if (dailyImg.url) {
      return (
        <>
          <h3>{dailyImg.title}</h3>
          <img
            className={styles.nasaPicOfTheDayImg}
            src={dailyImg.url}
            alt={`NASA photo of ${dailyImg.title}`}
          />
          <p className={styles.explanation}>{dailyImg.explanation}</p>
        </>
      );
    }
  };

  const renderRoverPhotosContent = () => {
    if (isLoadingRover) {
      return <p>Loading rover photos...</p>;
    }

    if (roverError) {
      return <p>Error: {roverError}</p>;
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
          {renderDailyImageContent()}
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
