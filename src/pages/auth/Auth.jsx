import { Link } from "react-router-dom";
import { logo, google, facebook } from "../../../public/assets";
import Container from "../../components/container/Container";
import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <main className={styles.main}>
      <hr className={styles.dash} />
      <Container>
        <div className={styles.content}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.auth}>
            <div className={styles.signIn}>
              <div className={styles.top}>
                <h1 className={styles.h1}>Log in or Sign up</h1>
                <p className={styles.span}>
                  Join millions of others in sharing successful moves on
                  HelpMeOut.
                </p>
              </div>
              <div className={styles.bottom}>
                <button className={styles.btn}>
                  <img src={google} alt="google" />
                  Continue with Google
                </button>
                <button className={styles.btn}>
                  <img src={facebook} alt="facebook" />
                  Continue with Facebook
                </button>
              </div>
            </div>
            <div className={styles.or}>
              <div className={styles.hr} />
              <p className={styles.p}>or</p>
              <div className={styles.hr} />
            </div>
            <div className={styles.signUp}>
              <label htmlFor="email" className={styles.label}>
                Email
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.inp}
                />
              </label>
              <label htmlFor="password" className={styles.label}>
                Password
                <input
                  type="email"
                  placeholder="Enter your password"
                  className={styles.inp}
                />
              </label>
            </div>
            <Link to={"/dashboard"}>
              <button className={styles.btn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Auth;
