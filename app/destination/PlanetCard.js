import styles from "@/components/destination/destination.module.css";

const PlanetCard = ({ name, description, thumbnail, isSelected, ...props }) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt='' />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className='roundButton' {...props}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export default PlanetCard;
