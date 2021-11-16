import React from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import styles from "./GalleryItem.module.css";

function GalleryItem({ videoUrl, text, authorName, authorNickName, avatar, hashtags, commentCount, likes }) {

  const location = useLocation();

  return (
    <li className={styles.GalleryItem}>
        <Link to={{pathname: `/profile/${authorName}`, state : { from : location } }}>
          <div className={styles.nameLink}>
            <img src={avatar} alt="Avatar" className={styles.avatar}/>
            <p>{authorNickName}</p>
          </div>
        </Link>
      <div className={styles.video}>
        <iframe 
          src={videoUrl}
          alt=""
          title={text}
        />
      </div>

      <p>{text}</p>
      <p>&#128151; {likes}</p>
      <p>&#128172; {commentCount}</p>
      <ul className={styles.hashtagList}>
        {hashtags.map(({name}) => (
          <li className={styles.hashtags}>#{name}</li>
        ))}
      </ul>
    </li>
  );
}

export default GalleryItem;