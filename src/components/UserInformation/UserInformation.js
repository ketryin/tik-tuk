import React from "react";
import styles from "./UserInformation.module.css";

const UserInformation = ({ userInfo }) => (
    <div className={styles.userInfoBlock}>
        <img src={userInfo.avatar} className={styles.avater} alt="Avatar"/>
        <div>
            <p>{userInfo.nickName}</p>
            <p>Followers {userInfo.followerCount}</p>
            <p>&#128151; {userInfo.heartCount}</p>
        </div>
    </div>
);
export default UserInformation;