/* eslint-disable react/prop-types */
import Video from "../Video/Video";
import "./videolist.css";

const VideoList = ({ videos, dispatch }) => {
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
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
};

export default VideoList;
