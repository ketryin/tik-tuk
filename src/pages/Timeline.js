import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import { getTrendingFeed } from "../api/tikTokApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpiner from "../components/Loader";
import { LoadingStatus as Status } from "./LoadingStatus";

function Timeline() {
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => fetchFeed(), []);

  const fetchFeed = () => {
    setStatus(Status.PENDING);
    
    getTrendingFeed()
        .then((data) => {
            const feedVideos = data.map(
                ({ id, videoUrl, text, authorMeta, commentCount, hashtags }) => ({ id, videoUrl, text, authorMeta, commentCount, hashtags }));
            setVideos(feedVideos);
        })
        .finally(() => {
          setStatus(Status.RESOLVED);
        });
  };

  return (
    <div>
        {status === Status.PENDING && videos.length === 0 ? (
        <LoaderSpiner/>
        ) : (
            <>
                <Gallery videos={videos} />
            </>
        )}

      {status === Status.PENDING && videos.length > 0 && (
        <LoaderSpiner/>
      )}
    </div>
  );
}

export default Timeline;