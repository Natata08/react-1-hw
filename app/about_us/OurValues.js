import styles from "./OurValues.module.css";

const OurValues = () => {
  const values = [
    {
      title: "Exploration",
      description:
        "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
      title: "Innovation",
      description:
        "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    },
    {
      title: "Community",
      description:
        "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
    },
  ];

  return (
    <ul className={styles.valuesList}>
      {values.map((value, index) => {
        return (
          <li key={value.title} className={styles.valueItem}>
            <h3 className={styles.valueTitle}>
              <span className={styles.valueNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{value.title}</span>
            </h3>
            <p className={styles.valueDescription}>{value.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OurValues;
