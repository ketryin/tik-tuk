import React from "react";
import styles from "./UserPosts.module.css";

const UserPosts = ({ userFeed }) => (
  <ul className={styles.userGallery}>
    {userFeed.map(({ playAddr, playCount }) =>
        <li className={styles.GalleryItem}>
            <p>Plays count {playCount}</p>
            <div className={styles.video}>
            <iframe src={playAddr} />
            </div>
        </li> )}
  </ul>
);
export default UserPosts;
