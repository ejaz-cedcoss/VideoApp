import "./App.css";
import AddVideo from "./component/AddVideo/AddVideo";
import VideoList from "./component/VideoList/VideoList";
import videosData from "./data/videosdata";
import { useReducer, useState } from "react";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);

  // Reducer method
  const videoRedcuer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case "ADD": {
        return [...state, { ...payload, id: state.length + 1 }];
      }
      case "DELETE": {
        return state.filter((video) => video.id !== payload);
      }
      case "EDIT": {
        const editData = state.find((video) => video.id === payload);
        setEditableVideo(editData);
        return state;
      }
      case "UPDATE": {
        const idx = state.findIndex((video) => video.id === payload.id);
        const temp = [...state];
        temp.splice(idx, 1, payload);
        setEditableVideo(null);
        return temp;
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(videoRedcuer, videosData);

  return (
    <div onClick={() => console.log("App")}>
      <AddVideo
        dispatch={dispatch}
        editableVideo={editableVideo}
        setEditableVideo={setEditableVideo}
      />
      <VideoList videos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
