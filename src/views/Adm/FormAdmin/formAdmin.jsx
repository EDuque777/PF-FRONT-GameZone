import React, { useState } from 'react';
import styles from './formAdmin.module.css';


const FormAdmin = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const { name, email, password, role } = form;

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    createUser()
  };
  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });
  
  
      const data = await response.json();
      console.log('Usuario creado:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.display_5}>Form Admins and Users</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_control}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleFieldChange}
          />
        </div>
        <div className={styles.form_control}>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleFieldChange}
          />
        </div>
        <div className={styles.form_control}>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleFieldChange}
          />
        </div>
        <div className={styles.form_control}>
          <label> Select a Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleFieldChange}
          >
            
            <option value="admin">Admin</option>
            <option value="users">User</option>
          </select>
        </div>
        <div className={styles.form_control}>
          <button className={styles.btn_sm} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAdmin;







