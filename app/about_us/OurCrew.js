import styles from "./OurCrew.module.css";

const OurCrew = () => {
  const crewMembers = [
    {
      name: "Captain Sarah Vega",
      position: "Mission Commander",
      image: "crew/image-anousheh-ansari.png",
      description:
        "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
      name: "Dr. Leo Redding",
      position: "Chief Astrophysicist",
      image: "crew/image-mark-shuttleworth.png",
      description:
        "A renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
      name: "Hana Lee",
      position: "Chief Engineer",
      image: "crew/image-victor-glover.png",
      description:
        "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    },
    {
      name: "Alex Santos",
      position: "Mission Specialist",
      image: "crew/image-douglas-hurley.png",
      description:
        "As a mission specialist, Alex's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    },
    {
      name: "Maya Patel",
      position: "Crew Member",
      image: "crew/image-anousheh-ansari.png",
      description:
        "Maya brings a unique blend of technical skills and customer service experience to the team. She's always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    },
  ];

  return (
    <div>
      <p className={styles["crew-description"]}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <ul className={styles["members-list"]}>
        {crewMembers.map((member) => {
          return (
            <li key={member.name} className={styles["member-item"]}>
              <img src={member.image} alt={`photo of ${member.name}`}></img>
              <h3 className={styles["member-title"]}>{member.name}</h3>
              <p className={styles["member-position"]}>{member.position}</p>
              <p className={styles["member-description"]}>
                {member.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurCrew;
