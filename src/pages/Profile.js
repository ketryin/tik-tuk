import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { getUserInfo, getUserFeed } from '../api/tikTokApi'
import { LoadingStatus as Status } from "../common/LoadingStatus";
import LoaderSpiner from "../components/Loader";
import UserInformatiom from '../components/UserInformation';
import UserPosts from '../components/UserPosts';

function Profile() {

    const { name } = useParams();
    const location = useLocation();

    const [userInfoStatus, setUserInfoStatus] = useState(Status.PENDING);
    const [userFeedStatus, setUserFeedStatus] = useState(Status.PENDING);
    const [userInfo, setUserInfo] = useState(null);
    const [userFeed, setUserFeed] = useState(null);

    useEffect(() => {

        setUserInfoStatus(Status.PENDING);

        getUserInfo(name).then(({ stats, user }) => {
            const info = {
                followerCount : stats.followerCount,
                heartCount : stats.heartCount,
                avatar : user.avatarMedium,
                nickName : user.nickname
            };

            setUserInfo(info);
            setUserInfoStatus(Status.RESOLVED);
        });

        getUserFeed().then(response => {
            const feed = response.itemList
                .map(function ({ video, stats }) {
                    return {
                        playAddr : video.playAddr,
                        playCount : stats.playCount
                    }; 
                });

            setUserFeed(feed);
            setUserFeedStatus(Status.RESOLVED);
        });

    }, [name, setUserInfo, setUserFeed, setUserFeedStatus, setUserInfoStatus]);

    return (
        <div>
            <Link to={{pathname: `/`, state : { from : location } }}>
            <p>	&#129044; Back to home page</p>
        </Link>
            {userInfoStatus === Status.PENDING && userInfo === null ? (
            <LoaderSpiner/>
            ) : (
                <UserInformatiom userInfo={userInfo}/>
            )}

            {userFeedStatus === Status.PENDING && userFeed === null ? (
            <LoaderSpiner/>
            ) : (
                <UserPosts userFeed={userFeed}/>
            )}            
        </div>
    );  
}

export default Profile;