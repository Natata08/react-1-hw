"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [wishlistCustomName, setWishlistCustomName] = useState("");
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");

  const handleInput = (event) => {
    setWishlistCustomName(event.target.value);
  };

  const onThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const onAddItemPressed = () => {
    if (wishlistCustomName.trim()) {
      onAddWishlistItem(wishlistCustomName, thumbnail);
      setWishlistCustomName("");
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor='customWishlist'>Wishlist item name</label>
      <input
        id='customWishlist'
        type='text'
        value={wishlistCustomName}
        onChange={handleInput}
        required
      />
      <label htmlFor='customWishlistThumbnail'>Wishlist item thumbnail</label>
      <select id='customWishlistThumbnail' onChange={onThumbnailChange}>
        <option value='/destination/image-europa.png'>EUROPA</option>
        <option value='/destination/image-mars.png'>MARS</option>
        <option value='/destination/image-moon.png'>MOON</option>
        <option value='/destination/image-titan.png'>TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
