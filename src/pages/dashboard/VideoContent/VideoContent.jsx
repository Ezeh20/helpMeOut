import styles from "./VideoContent.module.scss";
import Container from "../../../components/container/Container";
import { constants } from "./constants";
import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useEffect } from 'react'

const VideoContent = () => {
  // useEffect(() => {
  //     const getVideos = async () => {
  //         try {
  //             const res = await axios.get('https://hngproject5.onrender.com/api/video/:filename')
  //             console.log(res)
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  //     getVideos()
  // }, [])
  return (
    <section className={styles.content}>
      <Container>
        <div className={styles.items}>
          <div className={styles.recent}>
            <p>Recent file</p>
            <div className={styles.imgs}>
              {
                constants.slice(0, 3).map((itm) => {
                  const { id, img } = itm
                  return (
                    <Link to={`${id}`} key={id} className={styles.single}>
                      <img src={img} alt="img" />
                    </Link>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.his}>
            <p>Files from last week</p>
            <div className={styles.imgs}>
              {
                constants.map((itm) => {
                  const { id, img } = itm
                  return (
                    <Link to={`${id}`} key={id} className={styles.single}>
                    <img src={img} alt="img" />
                  </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoContent;
