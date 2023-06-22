import React from 'react';
import styles from './formAdmin.module.css';
const AdminForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
  };

  return (
    <div className={styles.container}>
      <div className="text-center">
        <h1 className={styles.display_5}><strong>CRUD ADMIN</strong></h1>
      </div>
      <div className="main row justify-content-center">
        <form action="" id="admin-form" className="row justify-content-center mb-4" autocomplete="off" onSubmit={handleSubmit}>
          <div className="col-10 col-md-8 mb-3">
            <label htmlFor="name">Name  </label>
            <input className={styles.form_control} id="name" type="text" placeholder="Enter Name" />
          </div>
          <div className="col-10 col-md-8 mb-3">
            <label htmlFor="email">Email  </label>
            <input className={styles.form_control} id="email" type="text" placeholder="Enter email" />
          </div>
          <div className="col-10 col-md-8 mb-3">
            <label htmlFor="password">Password  </label>
            <input className={styles.form_control} id="password" type="text" placeholder="Enter password" />
          </div>
          <div className="col-10 col-md-8 mb-3">
            <label htmlFor="role">Role  </label>
            <input className={styles.form_control} id="role" type="text" placeholder="Enter role" />
          </div>
          <div className="col-10 col-md-8 ">
            <input className={styles.add_btn} type="submit" value="Submit" />
          </div>
        </form>
        <div className="col-12 col-md-10 mt-5">
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="admin-list">
              <tr>
                <td>admin1</td>
                <td>admin1@gmail.com</td>
                <td>Admin</td>
                <td>
                  <a href="#" className={styles.btn_sm}>Edit</a>
                  <a href="#" className={styles.btn_sm}>Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
