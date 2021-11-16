import React from "react";
import styles from "./Gallery.module.css";
import GalleryItem from "../GalleryItem";

const Gallery = ({ videos }) => (
  <ul className={styles.gallery}>
    {videos.map(({ id, videoUrl, text, authorMeta, hashtags, commentCount }) => (
      <GalleryItem
        key={id}
        videoUrl={videoUrl}
        text={text}
        authorName={authorMeta.name}
        authorNickName={authorMeta.nickName}
        avatar={authorMeta.avatar}
        hashtags={hashtags}
        likes={authorMeta.heart}
        commentCount={commentCount}
      />
    ))}
  </ul>
);
export default Gallery;