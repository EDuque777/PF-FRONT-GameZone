import React from "react";
//import Select from "react-select";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser, postLogin } from "../../redux/actions";
import countries from "./countries";
import { useHistory } from "react-router-dom";
//import NavBar from '../../components/NavBar/NavBar'


const Form = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const usuario = useSelector((state) => state.user)

  const verificacion = async () => {
    if (usuario === null) {
      return console.log(true)
    }else{
      await localStorage.setItem("user", JSON.stringify(usuario));
    }
  }

  useEffect(() => {
    verificacion()
  }, [usuario])

  const [ name, setName ] = useState("")
  const [ user_name, setUser_name ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ country, setCountry ] = useState(null)

  //const [selectedCountry, setSelectedCountry] = React.useState(null);
  //const [password, setPassword] = React.useState("");
  //const [confirmPassword, setConfirmPassword] = React.useState("");
  //const [passwordError, setPasswordError] = React.useState("");

  const [ errorName, setErrorName ] = useState("")
  const [ errorUser_name, setErrorUser_name ] = useState("")
  const [ errorEmail, setErrorEmail ] = useState("")
  const [ errorPassword, setErrorPassword ] = useState("")
  const [ errorConfirmPassword, setErrorConfirmPassword ] = useState("")
  const [ errorCountry, setErrorCountry ] = useState("")

  // Captura de datos login
  const [ emailLogin, setEmailLogin ] = useState("")
  const [ passwordLogin, setPasswordLogin ] = useState("")
  const [ errorEmailLogin, setErrorEmailLogin ] = useState("")
  const [ errorPasswordLogin, setErrorPasswordLogin ] = useState("")

  const namePattern = RegExp(/^[A-Za-z\s]+$/)//--
  //const lastPattern = RegExp(/^[A-Za-z\s]+$/)
  const userNamePattern = RegExp(/^[a-zA-Z0-9_]{3,16}$/)
  const emailPattern = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const passwordPattern = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)//--

  //const [ datos, setDatos ] = useState({
  //  name : "",
  //  //user_name : "",
  //  email : "",
  //  password : "",
  //  //country : ""
  //})

  //const [ datosTwo, setDatosTwo ] = useState({
  //  email : "",
  //  password : ""
  //})

  //const [ error, setError ] = useState({
  //  name : "",
  //  //user_name : "",
  //  email : "",
  //  password : "",
  //  //country : ""
  //})

  //const [ errorTwo, setErrorTwo ] = useState({
  //  email : "",
  //  password : ""
  //})

  //const [ isFormModified, setIsFormModified ] = useState(false)
//
  //const [ isValid, setIsValid ] = useState(false)
//
  //const [ isFormModifiedTwo, setIsFormModifiedTwo ] = useState(false)
//
  //const [ isValidTwo, setIsValidTwo ] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleUserNameChange = (e) => {
    setUser_name(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleCountry = (e) => {
    setCountry(e.target.value)
  }

  const handleEmailLoginChange = (e) => {
    setEmailLogin(e.target.value)
  }

  const handlePasswordLoginChange = (e) => {
    setPasswordLogin(e.target.value)
  }

  const validateName = () => {
    if (!name) {
      return 'The name is required';
    }
    if (!namePattern.test(name)) {
      return 'The name is invalid';
    }
    return ''
  }

  const validateUserName = () => {
    if (!user_name) {
      return 'Username is required';
    }
    if (!userNamePattern.test(user_name)) {
      return 'Minimum of 3 characters and maximum of 16, accept (_)';
    }
    return ''
  }

  const validateEmail = () => {
    if (!email) {
      return 'Mail is required';
    }
    if (!emailPattern.test(email)) {
      return 'The email is invalid';
    }
    return '';
  }

  const validatePassword = () => {
    if (!password) {
      return 'Password is required';
    }
    if (!passwordPattern.test(password)) {
      return 'The password must be less than 8 characters and capital letter';
    }
    return '';
  }


  // validacion de email y password de Inicio de Sesion

  const validateEmailLogin = () => {
    if (!emailLogin) {
      return 'Mail is required';
    }
    if (!emailPattern.test(emailLogin)) {
      return 'The email is invalid';
    }
    return '';
  }

  const validatePasswordLogin = () => {
    if (!passwordLogin) {
      return 'Password is required';
    }
    if (!passwordPattern.test(passwordLogin)) {
      return 'The password must be less than 8 characters and capital letter';
    }
    return '';
  }

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

    const nameError = validateName()
    const userNameError = validateUserName()
    const emailError = validateEmail()
    const passwordError = validatePassword()
    setErrorName(nameError)
    setErrorUser_name(userNameError)
    setErrorEmail(emailError)
    setErrorPassword(passwordError);
    // Restante da lógica de envio do formulário

    if (password !== confirmPassword) {
      setErrorConfirmPassword("Passwords Do Not Match");
    }else if (password === confirmPassword) {
      setErrorConfirmPassword('')
    }

    if (country === "" || country === null) {
      setErrorCountry("Country is required")
    }else if (typeof country === "string" ) {
      setErrorCountry("")
    }

    const datos = {
      name, 
      user_name, 
      email, 
      password, 
      country, 
      confirmPassword
    }

    // Realizar la acción de envío del formulario aquí
    dispatch(postCreateUser(datos))

    alert("Inicia Sesion")

    history.push("/form")

    //console.log()
  };

  const handleForm2Submit = async (e) => {
    e.preventDefault();

    const emailErrorLogin = validateEmailLogin()
    const passwordErrorLogin = validatePasswordLogin()
    setErrorEmailLogin(emailErrorLogin)
    setErrorPasswordLogin(passwordErrorLogin)

    const datosTwo = {
      emailLogin, 
      passwordLogin,
    }

    await dispatch(postLogin(datosTwo))

    history.push("/home")

    alert("sesion Iniciada")

    //console.log(datosTwo) //se envian los datos al backend
  };

  return (
    
    <div className={styles.body_form}>
      <div className={`${styles.container} ${styles["right-panel-active"]}`}>
        {/* Sign Up */}
        <div className={`${styles.container__form} ${styles["container--signup"]}`}>
          <form action="#" className={styles.form} id="form1" onSubmit={handleForm1Submit}>
            <h2 className={styles["form__title"]}>Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            {errorName && <div style={{"color" : "red"}}>{errorName}</div>}
            <input
              type="text"
              placeholder="User Name"
              className={styles.input}
              value={user_name}
              onChange={(e) => handleUserNameChange(e)}
            />
            {errorUser_name && <div style={{"color" : "red"}}>{errorUser_name}</div>}
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            {errorEmail && <div style={{"color" : "red"}}>{errorEmail}</div>}
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            {errorPassword && <span className={styles.errorMessage}>{errorPassword}</span>}
            <input
              type="password"
              placeholder="Confirm Password"
              className={`${styles.input} ${errorPassword && styles.error}`}
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e)}
            />
            {errorConfirmPassword && <span className={styles.errorMessage}>{errorConfirmPassword}</span>}

            <select className={styles.input} name="country" onChange={(e) => handleCountry(e)} >

              <option value="" >Select a country</option>
              {
                countries.map((e) => {
                  return (
                    <option key={e.id} value={e.label}>{e.label}</option>
                  )
                })
              }
            </select>
            {errorCountry && <span className={styles.errorMessage}>{errorCountry}</span>}
            <button className={styles.btn}>Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className={`${styles.container__form} ${styles["container--signin"]}`}>
          <form action="#" className={styles.form} id="form2" onSubmit={handleForm2Submit}>
            <h2 className={styles["form__title"]}>Sign In</h2>
            <input
              type="text"
              placeholder="Email"
              className={styles.input}
              value={emailLogin}
              onChange={(e) => handleEmailLoginChange(e)}
            />
            {errorEmailLogin && <span className={styles.errorMessage}>{errorEmailLogin}</span>}
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={passwordLogin}
              onChange={(e) => handlePasswordLoginChange(e)}
            />
            {errorPasswordLogin && <span className={styles.errorMessage}>{errorPasswordLogin}</span>}
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


//<Select
//placeholder="Select a country"
//options={countries}
//id={selectedCountry}
//onChange={setSelectedCountry}
///>
