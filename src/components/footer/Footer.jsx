import styles from "./Footer.module.scss";
import Container from "../container/Container";
import { constants } from "./constants";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.logoAlt}>
            <img src={constants.logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.lists}>
            {constants.links.map((itm) => {
              const { id, head, links } = itm;
              return (
                <div key={id} className={styles.links}>
                  <p className={styles.head}>{head}</p>
                  <ul className={styles.ul}>
                    {links.map((link) => {
                      return (
                        <li key={link} className={styles.li}>
                          <a href="#" className={styles.link}>
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
