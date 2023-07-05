import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import MUIDataTable from "mui-datatables";
import styles from "./adm.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserList from "./Tablas/userList";

function Dashboard() {
  //Form Game
  const [showForm, setShowForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [requiredAge, setRequiredAge] = useState("");
  const [isFree, setIsFree] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [aboutTheGame, setAboutTheGame] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [comingSoon, setComingSoon] = useState("");
  const [supportInfo, setSupportInfo] = useState("");
  const [metacritic, setMetacritic] = useState("");
  const [priceOverview, setPriceOverview] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [capsuleImage, setCapsuleImage] = useState("");
  const [developers, setDevelopers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);

  // Form User
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");

  const [showUserList, setShowUserList] = useState(false);

  const handleGameSubmit = (event) => {
    event.preventDefault();
    if (
      !name ||
      !type ||
      !requiredAge ||
      !isFree ||
      !detailedDescription ||
      !aboutTheGame ||
      !shortDescription ||
      !releaseDate ||
      !comingSoon ||
      !supportInfo ||
      !metacritic ||
      !priceOverview ||
      !headerImage ||
      !capsuleImage
    ) {
      Swal.fire("Error", "Please fill in all the required fields", "error");
      return;
    }
    if (!Number.isInteger(parseInt(requiredAge))) {
      Swal.fire(
        "Error",
        "Please enter a valid integer for Required Age",
        "error"
      );
      return;
    }
    if (!Number.isInteger(parseInt(metacritic))) {
      Swal.fire(
        "Error",
        "Please enter a valid integer for Metacritic",
        "error"
      );
      return;
    }
    if (comingSoon !== "yes" && comingSoon !== "no") {
      Swal.fire(
        "Error",
        'Please enter either "yes" or "no" for Coming Soon',
        "error"
      );
      return;
    }
    if (isFree !== "yes" && isFree !== "no") {
      Swal.fire(
        "Error",
        'Please enter either "yes" or "no" for Is Free',
        "error"
      );
      return;
    }
    // if (typeof developers !== 'string') {
    //   Swal.fire('Error', 'Please enter developers as a string', 'error');
    //   return;
    // }
    // Validación de Developers
    if (!Array.isArray(developers) || developers.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one developer separated by commas",
        "error"
      );
      return;
    }

    // Validación de Géneros
    if (!Array.isArray(genres) || genres.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one genre separated by commas",
        "error"
      );
      return;
    }

    // Validación de Publishers
    if (!Array.isArray(publishers) || publishers.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one publisher separated by commas",
        "error"
      );
      return;
    }

    // Validación de Platform
    if (!Array.isArray(platform) || platform.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one platform separated by commas",
        "error"
      );
      return;
    }

    // Validación de Languages
    if (!Array.isArray(languages) || languages.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one language separated by commas",
        "error"
      );
      return;
    }

    // Validación de Categories
    if (!Array.isArray(categories) || categories.length === 0) {
      Swal.fire(
        "Error",
        "Please enter at least one category separated by commas",
        "error"
      );
      return;
    }

    createGames();
    // Lógica para enviar os dados do formulário de criação de jogo
    console.log("Dados do formulário de criação de jogo:", {
      name,
      type,
      requiredAge,
      isFree,
      detailedDescription,
      aboutTheGame,
      shortDescription,
      releaseDate,
      comingSoon,
      supportInfo,
      metacritic,
      priceOverview,
      headerImage,
      capsuleImage,
      developers,
      genres,
      publishers,
      platform,
      languages,
      categories,
    });
    // Limpar os campos do formulário após o envio
    setName("");
    setType("");
    setRequiredAge("");
    setIsFree("");
    setDetailedDescription("");
    setAboutTheGame("");
    setShortDescription("");
    setReleaseDate("");
    setComingSoon("");
    setSupportInfo("");
    setMetacritic("");
    setPriceOverview("");
    setHeaderImage("");
    setCapsuleImage("");
    setDevelopers("");
    setGenres("");
    setPublishers("");
    setPlatform("");
    setLanguages("");
    setCategories("");
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      Swal.fire("Error", "Please fill in all the fields", "error");
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }
    if (!validateEmail(email)) {
      Swal.fire("Error", "Please enter a valid email", "error");
      return;
    }

    if (role !== "users" && role !== "admin") {
      Swal.fire("Please select a valid role (User o Admin).");
      return false;
    }

    // Lógica para enviar os dados do formulário de criação de usuário
    console.log("Dados do formulário de criação de usuário:", {
      userName,
      email,
      password,
      confirmPassword,
      role,
    });
    // Limpar os campos do formulário após o envio
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRole("user");

    createUser();
  };

  const validateEmail = async (email) => {
    const emailRegex =
      /^[a-z][\w.-]*@[a-z][a-z0-9]*([.-][a-z0-9]+)*(\.[a-z]{2,10})+$/;

    if (!emailRegex.test(email)) {
      Swal.fire("Error", `Please enter a valid email`, "error");

      return false;
    }
    return true;
  };

  const createUser = async () => {
    try {
      const isValidateEmail = await validateEmail(email);
      if (isValidateEmail) {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: email,
            password,
            role,
          }),
        });

        if (!response.ok) {
          Swal.fire("Error", "Email is already registered", "error");
        } else {
          Swal.fire(
            "¡User created!",
            "The user has been successfully registered",
            "success"
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createGames = async () => {
    try {
      const response = await fetch("http://localhost:3001/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          type,
          required_age: requiredAge,
          is_free: isFree,
          detailed_description: detailedDescription,
          about_the_game: aboutTheGame,
          short_description: shortDescription,
          release_date: releaseDate,
          coming_soon: comingSoon,
          support_info: supportInfo,
          metacritic,
          price_overview: priceOverview,
          header_image: headerImage,
          capsule_image: capsuleImage,
          developers: developers.join(","),
          genres: genres.join(","),
          publishers: publishers.join(","),
          platform: platform.join(","),
          languages: languages.join(","),
          categories: categories.join(","),
        }),
      });

      const data = await response.json();
      Swal.fire("Success", "Game created successfully!", "success");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "An error occurred while creating the game.", "error");
    }
  };

  const handleCreateGameClick = () => {
    setShowForm(true);
    setShowUserForm(false);
    setShowUserList(false);
  };

  const handleCreateUserClick = () => {
    setShowUserForm(true);
    setShowForm(false);
    setShowUserList(false);
  };

  const handleUserListClick = () => {
    setShowUserList(true);
    setShowForm(false);
    setShowUserForm(false);
  };

  return (
    <html>
      <head></head>
      <body>
        <div className={styles.area}></div>
        <nav className={styles.main_menu}>
          <ul>
            <li>
              <Link to="/home" className={styles.nav_link}>
                <i className={`fa fa-home ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Home</span>
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleCreateGameClick}>
                <i className={`fa fa-cogs ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Create Game</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleCreateUserClick}>
                <i className={`fa fa-user ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Create User</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-gamepad ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Search Games</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleUserListClick}>
                <i className={`fa fa-users ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Search User</span>
              </a>
            </li>
            <li>
              <a href="#" /* onClick={} */>
                <i className={`fa fa-comments ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Review</span>
              </a>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <Link to="/login">
                <i className={`fa fa-power-off ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>

        {showForm && (
          <div className={styles.cardContainer}>
            <div className={styles.form1}>
              <h2 className={styles.createGame}>Product Creation</h2>
              <form className={styles.gameForm} onSubmit={handleGameSubmit}>
                <div>
                  <button
                    className={styles.close}
                    onClick={() => setShowForm(!showForm)}
                  >
                    X
                  </button>
                </div>
                <input
                  className={styles.input}
                  placeholder="Name Game"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Type"
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Required Age"
                  type="number"
                  value={requiredAge}
                  onChange={(e) => setRequiredAge(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder=" Is Free"
                  type="text"
                  value={isFree}
                  onChange={(e) => setIsFree(e.target.value)}
                />

                <textarea
                  className={styles.textarea}
                  placeholder="Detailed Description"
                  value={detailedDescription}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                />

                <textarea
                  className={styles.textarea}
                  placeholder="About the Game"
                  value={aboutTheGame}
                  onChange={(e) => setAboutTheGame(e.target.value)}
                />
                <textarea
                  className={styles.textarea}
                  placeholder="Short Description"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Release Date"
                  type="text"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Coming Soon"
                  type="text"
                  value={comingSoon}
                  onChange={(e) => setComingSoon(e.target.value)}
                />

                <textarea
                  className={styles.textarea}
                  placeholder=" Support Info"
                  value={supportInfo}
                  onChange={(e) => setSupportInfo(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Metacritic"
                  type="text"
                  value={metacritic}
                  onChange={(e) => setMetacritic(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Price Overview"
                  type="text"
                  value={priceOverview}
                  onChange={(e) => setPriceOverview(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Capsule Image"
                  type="text"
                  value={capsuleImage}
                  onChange={(e) => setCapsuleImage(e.target.value)}
                />

                <input
                  className={styles.input}
                  placeholder="Developers"
                  type="text"
                  value={developers}
                  onChange={(e) => setDevelopers(e.target.value.split(","))}
                />

                <input
                  className={styles.input}
                  placeholder="Genres"
                  type="text"
                  value={genres}
                  onChange={(e) => setGenres(e.target.value.split(","))}
                />

                <input
                  className={styles.input}
                  placeholder="Platform"
                  type="text"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value.split(","))}
                />

                <input
                  className={styles.input}
                  placeholder="Languages"
                  type="text"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value.split(","))}
                />

                <input
                  className={styles.input}
                  placeholder="Categories"
                  type="text"
                  value={categories}
                  onChange={(e) => setCategories(e.target.value.split(","))}
                />

                <input
                  className={styles.input}
                  placeholder="URL Image"
                  type="text"
                  value={headerImage}
                  onChange={(e) => setHeaderImage(e.target.value)}
                />

                <input
                  className={styles.button2}
                  type="submit"
                  value="Create Game"
                />
              </form>
            </div>
          </div>
        )}

        {showUserForm && (
          <div className={styles.cardContainer}>
            <div className={styles.formcontainer}>
              <div>
                <button
                  className={styles.close}
                  onClick={() => setShowUserForm(!showUserForm)}
                >
                  X
                </button>
              </div>
              <h2>Create User</h2>
              <form className={styles.formUser} onSubmit={handleUserSubmit}>
                <input
                  className={styles.input}
                  placeholder="Name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder="Email"
                  type="text"
                  value={email.toLowerCase()}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <select
                  className={styles.input}
                  type="check-box"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select role</option>
                  <option value="users">User</option>
                  <option value="admin">Admin</option>
                </select>
                <input
                  className={styles.button2}
                  type="submit"
                  value="Register"
                />
              </form>
            </div>
          </div>
        )}
        {showUserList && <UserList />}
      </body>
    </html>
  );
}
export default Dashboard;
