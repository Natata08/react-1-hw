import styles from "./page.module.css";
import OurValues from "./OurValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";

export const Crew = () => {
  return (
    <div className='fullBGpicture'>
      <main className='mainContent'>
        <h1>About us</h1>
        <section className='card'>
          <h2 className={styles.cardTitle}>Our Values</h2>
          <OurValues />
        </section>
        <section className='card'>
          <h2 className={styles.cardTitle}>The crew</h2>
          <OurCrew />
        </section>
        <section className='card'>
          <h2 className={styles.cardTitle}>Our partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
