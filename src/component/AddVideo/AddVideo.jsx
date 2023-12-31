import { useEffect, useState } from "react";
import "./addvideo.css";

const initialVideoState = {
  time: "1 month ago",
  channelName: "traversyMedia",
  views: "",
  title: "",
  isVerified: true,
};

// eslint-disable-next-line react/prop-types
const AddVideo = ({ dispatch, editableVideo }) => {
  const [newvideo, setNewvideo] = useState(initialVideoState);

  const submitData = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { title, views } = newvideo;
    if (title !== "" && views !== "") {
      if (editableVideo) {
        dispatch({ type: "UPDATE", payload: newvideo });
      } else {
        dispatch({ type: "ADD", payload: newvideo });
      }
      setNewvideo(initialVideoState);
    } else {
      alert("feilds missing.....");
    }
  };

  const handleChage = (e) => {
    e.stopPropagation();
    setNewvideo({ ...newvideo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (editableVideo) setNewvideo(editableVideo);
  }, [editableVideo]);

  return (
    <>
      <div className="form-wrap">
        <h3>ADD VIDEO</h3>
        <form className="forms" action="" onSubmit={submitData}>
          <input
            placeholder="Enter title of tutorial"
            className="inp"
            name="title"
            onChange={handleChage}
            value={newvideo.title}
          ></input>
          <input
            placeholder="Enter views on videos"
            className="inp"
            name="views"
            onChange={handleChage}
            value={newvideo.views}
          ></input>
          <input
            type="submit"
            value={editableVideo ? "Update video" : `Add video`}
            className="add-btn"
          />
        </form>
      </div>
    </>
  );
};

export default AddVideo;
