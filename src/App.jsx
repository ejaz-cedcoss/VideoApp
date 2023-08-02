import "./App.css";
import AddVideo from "./component/AddVideo/AddVideo";
import VideoList from "./component/VideoList/VideoList";
import videosData from "./data/videosdata";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videosData);
  const [editableVideo, setEditableVideo] = useState(null);

  const addVideos = (newVideo) =>
    setVideos([...videos, { ...newVideo, id: videos.length + 1 }]);

  const deleteVideo = (id) =>
    setVideos(videos.filter((video) => video.id !== id));

  const editVideo = (id) =>
    setEditableVideo(videos.find((video) => video.id === id));

  const updateVideo = (updatableVideo) => {
    const idx = videos.findIndex((video) => video.id === updatableVideo.id);
    const temp = [...videos];
    temp.splice(idx, 1, updatableVideo);
    setVideos(temp);
    setEditableVideo(null);
  };

  return (
    <div onClick={() => console.log("App")}>
      <AddVideo
        addVideos={addVideos}
        editableVideo={editableVideo}
        setEditableVideo={setEditableVideo}
        updateVideo={updateVideo}
      />
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      />
    </div>
  );
}

export default App;
