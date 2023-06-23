import styles from './adm.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [nameGame, setNameGame] = useState('');
  const [languages, setLanguages] = useState('');
  const [minimumAge, setMinimumAge] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleGameSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário de criação de jogo
    console.log('Dados do formulário de criação de jogo:', {
      nameGame,
      languages,
      minimumAge,
      description,
      price
    });
    // Limpar os campos do formulário após o envio
    setNameGame('');
    setLanguages('');
    setMinimumAge('');
    setDescription('');
    setPrice('');
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário de criação de usuário
    console.log('Dados do formulário de criação de usuário:', {
      userName,
      email,
      password,
      confirmPassword,
      role
    });
    // Limpar os campos do formulário após o envio
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('user');
  };

  const handleCreateGameClick = () => {
    setShowForm(true);
    setShowUserForm(false);
  };

  const handleCreateUserClick = () => {
    setShowUserForm(true);
    setShowForm(false);
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
                <span className={styles.nav_text}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleCreateGameClick}>
                <i className={`fa fa-cogs ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Create Game
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleCreateUserClick}>
                <i className={`fa fa-user ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Create User
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-shopping-cart ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Sales
                </span>
              </a>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <Link to="/login">
                <i className={`fa fa-power-off ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {showForm && (
          <div className={styles.cardContainer}>
            <div className={styles.form1}>
              <h2>Product Creation</h2>
              <form onSubmit={handleGameSubmit}>
                <label>
                  Name Game:
                  <input type="text" value={nameGame} onChange={(e) => setNameGame(e.target.value)} />
                </label>
                <br />
                <label>
                  Languages:
                  <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} />
                </label>
                <br />
                <label>
                  Minimum Age:
                  <input type="number" value={minimumAge} onChange={(e) => setMinimumAge(e.target.value)} />
                </label>
                <br />
                <label>
                  Description:
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                  Price:
                  <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <input className={styles.button2} type="submit" value="Create Game" />
              </form>
            </div>
          </div>
        )}

        {showUserForm && (
          <div className={styles.cardContainer}>
            <div className={styles.form1}>
              <h2>Create User</h2>
              <form onSubmit={handleUserSubmit}>
                <label>
                  Name:
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <br />
                <label>
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                  Password:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <label>
                  Confirm Password:
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <br />
                <label>
                  Select a Role:
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
                <br />
                <input className={styles.button2} type="submit" value="Register" />
              </form>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}

export default Dashboard;
