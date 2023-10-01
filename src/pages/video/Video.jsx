import { Link, useParams } from "react-router-dom";
import {
    pen,
    whats,
    tele,
    face,
    copy,
    send,
    lang,
    success,
    close
} from "../../../public/assets";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import styles from "./Video.module.scss";
import { constants } from "./constants";
import { useState } from "react";


const Video = () => {
    const { id } = useParams()
    const [active, setActive] = useState(false);

    return (
        <div className={styles.aka}>
            <main className={styles.main}>
                <Navigation />
                <div className={styles.firstPart}>
                    <Container>
                        <div className={styles.co}>
                            <div className={styles.top}>
                                <h1 className={styles.header}>Your video is ready!</h1>
                                <div className={styles.tnt}>
                                    <div className={styles.top_name}>
                                        <span className={styles.name}>Name</span>
                                        <div className={styles.filename}>
                                            <p className={styles.file}>{id}.webm</p>
                                            <img src={pen} alt="edit" className={styles.pen} />
                                        </div>
                                    </div>
                                    <div className={styles.emailContainer}>
                                        <input
                                            type="text"
                                            placeholder="enter email of receiver"
                                            className={styles.input}
                                        />
                                        <img src={send} alt="send" className={styles.send} />
                                    </div>
                                    <div className={styles.videoUrl}>
                                        <p className="label">Video Url</p>
                                        <div className={styles.emailContainer}>
                                            <input
                                                value={`http://hngproject5.onrender.com/uploads/videos/${id}.webm`}
                                                type="text"
                                                placeholder="link"
                                                className={styles.input}
                                                readOnly
                                            />
                                            <img src={copy} alt="send" className={styles.send} />
                                        </div>
                                    </div>
                                    <div className={styles.share}>
                                        <p className={styles.shared}>Share your video</p>
                                        <div className={styles.socials}>
                                            <img
                                                src={face}
                                                alt="facebook"
                                                className={styles.socials}
                                            />
                                            <img
                                                src={whats}
                                                alt="facebook"
                                                className={styles.socials}
                                            />
                                            <img
                                                src={tele}
                                                alt="facebook"
                                                className={styles.socials}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.line} />
                            <div className={styles.bottom}>
                                <video controls className={styles.video}>

                                    <source
                                        src={`http://hngproject5.onrender.com/uploads/videos/${id}.webm`}
                                        type="video/webm"
                                    />
                                </video>
                                <div className={styles.text}>
                                    <div className={styles.text_top}>
                                        <p className={styles.head}>Transcript</p>
                                        <img src={lang} alt="lang" className={styles.lang} />
                                    </div>
                                    <div className={styles.content}>
                                        {constants.map((itm) => {
                                            return (
                                                <div key={itm.id} className={styles.trans}>
                                                    <p className={styles.time}>{itm.time}</p>
                                                    <p className={styles.text}>{itm.text}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className={styles.bo}>
                        <p className={styles.text}>
                            To ensure the availability and privacy of your video, we recommend
                            saving it to your account.
                        </p>
                        <button className={styles.btn} onClick={() => setActive(pre => !pre)}>Save Video</button>
                        <p className={styles.account}>
                            Don’t have an account?{" "}
                            <Link to={'/login'} className={styles.span}>Create account</Link>
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
            {
                active ? <div className={styles.modal}>
                    <Container>
                        <div className={styles.container}>
                            <div className={styles.success}>
                                <img src={success} alt="su" className={styles.sui} />
                            </div>
                            <p className={styles.email}>
                                Your video link has been sent to
                                <span className={styles.span}> johnmark@gmail.com</span>
                            </p>
                            <div className={styles.btm}>
                                <p className={styles.later}>Would you need to view this video later? Save to your account now!</p>
                                <Link to={'/dashboard'}>
                                    <button className={styles.btn}>Save Video</button>
                                </Link>
                                <p className={styles.account}>
                                    Don’t have an account?{" "}
                                    <Link to={'/login'} className={styles.span}>Create account</Link>
                                </p>
                            </div>
                            <img src={close} alt="close" className={styles.close} onClick={() => setActive(pre => !pre)} />
                        </div>
                    </Container>
                </div> : undefined
            }
        </div>
    );
};

export default Video;
