import React from "react";
import Select from "react-select";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postCreateUser, postLogin } from "../../redux/actions";
import countries from "./countries";


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

  const handleChange = (e) => {
    const { name, value } = e.target

    setDatos(
      {
        ...datos,
        [name] : value
      }
    )

    setIsFormModified(true)
  }

  const namePattern = RegExp(/^[A-Za-z\s]+$/)//--
  //const lastPattern = RegExp(/^[A-Za-z\s]+$/)
  //const userNamePattern = RegExp(/^[a-zA-Z0-9_]{3,16}$/)
  const emailPattern = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const passwordPattern = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)//--

  function Validation() {
    const { name, email, password } = datos

    let nameError = ""
    //let userNameError = ""
    let emailError = ""
    let passwordError = ""
    //let countryError = "" // esta podria ser opcional

    if (!isFormModified) {
      return false
    }

    if (!name) {
      nameError = "El nombre es requerido"
    }else if (!namePattern.test(name)) {
      nameError = "El nombre debe contener solo letras"
    }

    if (!email) {
      emailError = "El email es requerido"
    }else if (!emailPattern.test(email)) {
      emailError = "El correo electrónico debe ser válido"
    }

    if (!password) {
      passwordError = "El password es requerido"
    }else if (!passwordPattern.test(password)) {
      passwordError = "Debe de tener al menos 8 caracteres un numero y una letra en Mayuscula"
    }

    if (nameError.length === 0 && passwordError.length === 0 && emailError.length === 0) {
      setIsValid(true)
    }else {
      setIsValid(false)
    }

    setError({
      name : nameError,
      email : emailError,
      password : passwordError
    })

  }

  const handleChangeTwo = (e) => {
    const { name, value } = e.target

    setDatosTwo(
      {
        ...datosTwo,
        [name] : value
      }
    )

    setIsFormModifiedTwo(true)
  }

  const emailPatternTwo = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const passwordPatternTwo = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)

  function ValidationTwo() {
    const { email, password } = datosTwo

    let emailErrorTwo = ""
    let passwordErrorTwo = ""

    if (!isFormModifiedTwo) {
      return false
    }

    if (!email) {
      emailErrorTwo = "El email es requerido"
    }else if (!emailPatternTwo.test(email)) {
      emailErrorTwo = "El correo electrónico debe ser válido"
    }

    if (!password) {
      passwordErrorTwo = "El password es requerido"
    }else if (!passwordPatternTwo.test(password)) {
      passwordErrorTwo = "Debe de tener al menos 8 caracteres un numero y una letra en Mayuscula"
    }

    if (passwordErrorTwo.length === 0 && emailErrorTwo.length === 0) {
      setIsValidTwo(true)
    }else {
      setIsValidTwo(false)
    }

    setErrorTwo(
      {
        email : emailErrorTwo,
        password : passwordErrorTwo
      }
    )
  }

  const handleForm1Submit = (e) => {
    e.preventDefault();
    dispatch(postCreateUser(datos))
    console.log(datos) //se envian los datos al backend
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();

    dispatch(postLogin(datosTwo))

    console.log(datosTwo) //se envian los datos al backend
  };


  useEffect(() => {
    Validation()
    ValidationTwo()
  }, [datos, setIsFormModified, setIsValid, datosTwo, setIsFormModifiedTwo, setIsValidTwo])

  const [selectedCountry, setSelectedCountry] = React.useState(null);


  return (
    <div className={styles.body_form}>
    <div className={`${styles.container} ${styles["right-panel-active"]}`}>
      {/* Sign Up */}
      <div className={`${styles.container__form} ${styles["container--signup"]}`}>
        <form action="#" className={styles.form} id="form1" onSubmit={handleForm1Submit}>
          <h2 className={styles["form__title"]}>Create Account</h2>

          <input type="text" placeholder="Name" name="name" value={datos.name} onChange={(e) => handleChange(e)} className={styles.input} />
          { error.name && <span style={{color : "red"}} >{error.name}</span>}
          <input type="email" placeholder="Email" name="email" value={datos.email} onChange={(e) => handleChange(e)} className={styles.input} />
          { error.email && <span style={{color : "red"}} >{error.email}</span>}
          <input type="password" placeholder="Password" name="password" value={datos.password} onChange={(e) => handleChange(e)} className={styles.input} />
          { error.password && <span style={{color : "red"}} >{error.password}</span>}
          <button className={styles.btn} disabled={!isValid} >Sign Up</button>
          <Select
            placeholder="Select a country"
            options={countries}
            id={selectedCountry}
            onChange={setSelectedCountry}
          />
        </form>
      </div>

      {/* Sign In */}
      <div className={`${styles.container__form} ${styles["container--signin"]}`}>
        <form action="#" className={styles.form} id="form2" onSubmit={handleForm2Submit}>
          <h2 className={styles["form__title"]}>Sign In</h2>
          <input type="email" placeholder="Email" name="email" value={datosTwo.email} onChange={(e) => handleChangeTwo(e)} className={styles.input} />
          { errorTwo.email && <span style={{color : "red"}} >{errorTwo.email}</span>}
          <input type="password" placeholder="Password" name="password" value={datosTwo.password} onChange={(e) => handleChangeTwo(e)} className={styles.input} />
          { errorTwo.password && <span style={{color : "red"}} >{errorTwo.password}</span>}
          <a href="#" className={styles.link}>Forgot your password?</a>
          <button className={styles.btn} disabled={!isValidTwo} >Sign In</button>
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






