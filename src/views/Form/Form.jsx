import React from "react";
import Select from "react-select";
import styles from "./Form.module.css";
import countries from "./countries";

const Form = () => {
  const handleSignIn = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.remove(styles["right-panel-active"]);
  };

  const handleSignUp = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.add(styles["right-panel-active"]);
  };

  const handleForm1Submit = (e) => {
    e.preventDefault();
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
  };

  const [selectedCountry, setSelectedCountry] = React.useState(null);

  return (
    <div className={`${styles.container} ${styles["right-panel-active"]}`}>
      {/* Sign Up */}
      <div className={`${styles.container__form} ${styles["container--signup"]}`}>
        <form action="#" className={styles.form} id="form1" onSubmit={handleForm1Submit}>
          <h2 className={styles["form__title"]}>Create Account</h2>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="User Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <Select
            placeholder="Select a country"
            options={countries}
            id={selectedCountry}
            onChange={setSelectedCountry}
          />
          <button className={styles.btn}>Sign Up</button>
        </form>
      </div>

      {/* Sign In */}
      <div className={`${styles.container__form} ${styles["container--signin"]}`}>
        <form action="#" className={styles.form} id="form2" onSubmit={handleForm2Submit}>
          <h2 className={styles["form__title"]}>Sign In</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <a href="#" className={styles.link}>Forgot your password?</a>
          <button className={styles.btn}>Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className={styles.container__overlay}>
        <div className={styles.overlay}>
          <div className={`${styles.overlay__panel} ${styles["overlay--left"]}`}>
            <button className={styles.btn} id="signIn" onClick={handleSignIn}>Sign In</button>
          </div>
          <div className={`${styles.overlay__panel} ${styles["overlay--right"]}`}>
            <button className={styles.btn} id="signUp" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;






