import styles from './adm.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <html>
      <head>

      </head>
      <body>
        <div className={styles.area}></div>
        <nav className={styles.main_menu}>
          <ul>
            <li>
              <a href="">
                <i className={`fa fa-home ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Dashboard
                </span>
              </a>
            </li>
            <li className="has subnav">
              <a href="#">
                <i className={`fa fa-globe ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Global Surveyors
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className={`fa fa-comments ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Group Hub Forums
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className={`fa fa-camera-retro ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Survey Photos
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-film ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Surveying Tutorials
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-book ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Surveying Jobs
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-cogs ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Tools & Resources
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-map-marker ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Member Map
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-info ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Documentation
                </span>
              </a>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <Link to="/form">
                <i className={`fa fa-power-off ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}

export default Dashboard;
