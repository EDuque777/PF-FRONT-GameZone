import React from "react";
import Select from "react-select";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCreateUser, postLogin } from "../../redux/actions";
import countries from "./countries";
import NavBar from '../../components/NavBar/NavBar'


const Form = () => {

  const dispatch = useDispatch()

  const [ datos, setDatos ] = useState({
    name : "",
    //user_name : "",
    email : "",
    password : "",
    //country : ""
  })

  const [ datosTwo, setDatosTwo ] = useState({
    email : "",
    password : ""
  })

  const [ error, setError ] = useState({
    name : "",
    //user_name : "",
    email : "",
    password : "",
    //country : ""
  })

  const [ errorTwo, setErrorTwo ] = useState({
    email : "",
    password : ""
  })

  const [ isFormModified, setIsFormModified ] = useState(false)

  const [ isValid, setIsValid ] = useState(false)

  const [ isFormModifiedTwo, setIsFormModifiedTwo ] = useState(false)

  const [ isValidTwo, setIsValidTwo ] = useState(false)

  const handleSignIn = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.remove(styles["right-panel-active"]);
  };

  const handleSignUp = () => {
    const container = document.querySelector(`.${styles.container}`);
    container.classList.add(styles["right-panel-active"]);
  };

  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleForm1Submit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords Do Not Match");
      return;
    }

    setPasswordError("");
    // Restante da lógica de envio do formulário
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();

    dispatch(postLogin(datosTwo))

    console.log(datosTwo) //se envian los datos al backend
  };

  return (
    
    <div className={styles.body_form}>
      <NavBar />
      <div className={`${styles.container} ${styles["right-panel-active"]}`}>
        {/* Sign Up */}
        <div className={`${styles.container__form} ${styles["container--signup"]}`}>
          <form action="#" className={styles.form} id="form1" onSubmit={handleForm1Submit}>
            <h2 className={styles["form__title"]}>Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="User Name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${styles.input} ${passwordError && styles.error}`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && <span className={styles.errorMessage}>{passwordError}</span>}
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
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
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
    </div>
  );
};

export default Form;
