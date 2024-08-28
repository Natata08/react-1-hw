import styles from "./OurPartners.module.css";

const OurPartners = () => {
  const partners = [
    "alphabet",
    "amazon",
    "cbc",
    "microsoft",
    "nyu",
    "queens",
    "samsung",
    "sodexo",
  ];

  return (
    <div>
      <p className={styles["partners-description"]}>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul className={styles["partners-list"]}>
        {partners.map((partner) => {
          return (
            <li key={partner} className={styles["partner-item"]}>
              <img
                src={`business_partners/${partner}-logo.png`}
                alt={`logo of ${partner}`}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurPartners;
