import { record } from "../../../../../public/assets";
import Container from "../../../../components/container/Container";
import styles from "./How.module.scss";
import { constants } from "./constants";

const How = () => {
  return (
    <Container>
      <section className={styles.section}>
        <h3 className={styles.header}>{constants.header}</h3>
        <div className={styles.content}>
          {constants.content.map((itm) => {
            const { id, img, title, content } = itm;
            return (
              <div key={id} className={styles.single}>
                <div className={styles.top}>
                  <img src={img} alt="img" className={styles.img} />
                  <p className={styles.title}>{title}</p>
                  <p className={styles.content}>{content}</p>
                </div>
                <div className={styles.imgContainer}>
                  <img src={record} alt="record" className={styles.record} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default How;
