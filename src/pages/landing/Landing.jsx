import styles from "./Landing.module.scss";
import Navigation from "../../components/navigation/Navigation";
import Container from "../../components/container/Container";
import { constants } from "./constants";
import {
  hero1,
  hero2,
  hero3,
  heroAlt,
  heroAlt2,
  arrow,
} from "../../../public/assets";
import Features from "./sections/Features/Features";
import How from "./sections/How-it-works/How";
import Footer from "../../components/footer/Footer";

const Landing = () => {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
        <section className={styles.section}>
          <Container>
            <div className={styles.sectionContent}>
              <div className={styles.top}>
                <h1 className={styles.header}>{constants.header}</h1>
                <p className={styles.text}>{constants.content}</p>
                <button className={styles.btn}>
                  {constants.install}
                  <img src={arrow} alt="arrow" className={styles.arrow} />
                </button>
              </div>
              <div className={styles.bottom}>
                <div className={styles.firstSet}>
                  <img src={hero1} alt="hero1" className={styles.set1} />
                  <img src={hero2} alt="hero2" className={styles.set1} />
                  <img src={heroAlt} alt="alt" className={styles.alt} />
                </div>
                <div className={styles.secondSet}>
                  <img src={hero3} alt="hero3" className={styles.set2} />
                  <img src={heroAlt2} alt="alt2" className={styles.alt2} />
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section id="features" className={styles.fetures}>
          <Features />
        </section>
        <section id="how-it-works" className={styles.fetures}>
          <How />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
