import Container from "../../../../components/container/Container";
import styles from "./Features.module.scss";
import { vid } from "../../../../../public/assets";
import { constants } from "./constants";

const Features =
    () => {
        return (
            <section className={styles.section}>
                <Container>
                    <div className={styles.top}>
                        <h1 className={styles.header}>{constants.header}</h1>
                        <span className={styles.span}>{constants.subHeader}</span>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.items}>
                            {
                                constants.features.map((itm) => {
                                    const { id, img, title, feat } = itm
                                    return (
                                        <div key={id} className={styles.single}>
                                            <img src={img} alt={title} className={styles.img} />
                                            <div className={styles.content}>
                                                <h3 className={styles.title}>{title}</h3>
                                                <p className={styles.feat}>{feat}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={vid} alt="vid" className={styles.img}/>
                        </div>
                    </div>
                </Container>
            </section>
        );
    };

export default Features;
