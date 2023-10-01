import { useState } from "react";
import { logo } from "../../../public/assets";
import Container from "../container/Container";
import styles from "./Navigation.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <Link to={'/'} className={styles.imgCon}>
            <img src={logo} alt="logo" className={styles.img} />
          </Link>
          <ul
            className={
              active ? `${styles.ulAlt} ${styles.ul}` : `${styles.ul}`
            }>
            <a href="#features" className={styles.links}>
              <li className={styles.link} onClick={() => setActive(!active)}>
                Features
              </li>
            </a>
            <a href="#how-it-works" className={styles.links}>
              <li className={styles.link} onClick={() => setActive(!active)}>
                How It Works
              </li>
            </a>
          </ul>
          <div className={styles.toggleContainer}>
            <Link to={'/login'}>
              <button className={styles.cta}>Get Started</button>
            </Link>
            {active ? (
              <AiOutlineClose
                className={styles.icon}
                onClick={() => setActive(!active)}
              />
            ) : (
              <AiOutlineMenu
                className={styles.icon}
                onClick={() => setActive(!active)}
              />
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
