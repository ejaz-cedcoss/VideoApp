/* eslint-disable react/prop-types */
import Video from "../Video/Video";
import "./videolist.css";

const VideoList = ({ videos, deleteVideo, editVideo }) => {
  return (
    <>
      <hr />
      <div className="video-list">
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channelName}
            isVerified={video.isVerified}
            id={video.id}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          />
        ))}
      </div>
    </>
  );
};

export default VideoList;
