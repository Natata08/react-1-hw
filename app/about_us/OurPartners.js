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
      <p className={styles.partnersDescription}>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul className={styles.partnersList}>
        {partners.map((partner) => {
          return (
            <li key={partner} className={styles.partnerItem}>
              <img
                src={`business_partners/${partner}-logo.png`}
                alt={`${partner} logo`}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurPartners;
