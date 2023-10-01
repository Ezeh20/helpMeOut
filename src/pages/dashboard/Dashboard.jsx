import { Link } from 'react-router-dom'
import logo from '../../../public/assets/logo.svg'
import user from '../../../public/assets/user.svg'
import unt from '../../../public/assets/unt.svg'
import Container from '../../components/container/Container'
import VideoContent from './VideoContent/VideoContent'
import styles from './Dashboard.module.scss'


const Dashboard = () => {
    return (
        <main className={styles.main}>
            <div className={styles.topp}>
                <div className={styles.dash} />
                <>
                    <Container>
                        <div className={styles.header}>
                            <Link to={'/'}>
                                <img src={logo} alt="logo" />
                            </Link>
                            <img src={user} alt="user" />
                        </div>

                        <div className={styles.tabs}>
                            <div className={styles.top}>
                                <h1 className={styles.heading}>Hello, John Mark</h1>
                                <p className={styles.content}>Here are your recorded videos</p>
                            </div>
                            <div className={styles.untContainer}>
                                <img src={unt} alt="unt" className={styles.img} />
                            </div>
                        </div>
                    </Container>
                </>
                <div className={styles.dash2} />
            </div>
            <div className={styles.contentt}>
                <VideoContent />
            </div>
        </main>
    )
}

export default Dashboard