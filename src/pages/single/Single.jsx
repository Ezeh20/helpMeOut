import Container from "../../components/container/Container"
import { constants } from "../dashboard/VideoContent/constants"
import { Link, useParams } from "react-router-dom"
import styles from './Single.module.scss'
import { logo, user, pen, send, copy, face, whats, tele, lang } from "../../../public/assets"
import { constant } from "./constant"

const Single = () => {
  const { id } = useParams()
  const filtered = constants[id]
  const { img, title } = filtered

  return (
    <main className={styles.main}>
      <div className={styles.topp}>
        <div className={styles.dash} />
        <>
          <Container className={styles.class}>
            <div className={styles.header}>
              <Link to={'/'}>
                <img src={logo} alt="logo" />
              </Link>
              <img src={user} alt="user" />
            </div>

            <div className={styles.tabs}>
              <p>Home / </p>
              <p> Recent Videos / </p>
              <p> How To Create A Facebook Ad Listing </p>
            </div>
            <div className={styles.edit}>
              <p>{title}</p>
              <img src={pen} alt="pen" />
            </div>
            <div className={styles.content}>
              <img src={img} alt="img" />
            </div>
            <div>
              <div className={styles.bottom}>
                <div className={styles.inputs}>
                  <div className={styles.emailContainer}>
                    <input
                      type="text"
                      placeholder="enter email of receiver"
                      className={styles.input}
                    />
                    <img src={send} alt="send" className={styles.send} />
                  </div>

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
                <div>
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
                  <div className={styles.te}>
                    <div className={styles.text_top}>
                      <p className={styles.head}>Transcript</p>
                      <img src={lang} alt="lang" className={styles.lang} />
                    </div>
                    <div className={styles.content}>
                      {constant.map((itm) => {
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
            </div>
          </Container>
        </>
      </div>
    </main >
  )
}

export default Single