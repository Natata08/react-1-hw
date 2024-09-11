import styles from "@/components/destination/destination.module.css";

const PlanetWishlistItem = ({ name, onRemove, thumbnail }) => {
  return (
    <li className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt='' />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </li>
  );
};

export default PlanetWishlistItem;
