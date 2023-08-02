import PlayButton from "../Playbutton/PlayButton";
import "./video.css";
const Video = (_props) => {
  const {
    title,
    views,
    channel = "traversyMedia",
    time,
    isVerified,
    id,
    editVideo,
    deleteVideo,
  } = _props;
  const playVideo = (titles) => console.log(`${titles} Video is playing.. `);
  const pauseVideo = (titles) => console.log(`${titles} Video has paused`);

  const handleDelete = (_id) => {
    deleteVideo(_id);
  };

  const handleEdit = (_id) => {
    editVideo(_id);
  };

  return (
    <div>
      <div className="card">
        <img
          src={`https://picsum.photos/id/${id}/190/120`}
          alt="asdf"
          height={"30%"}
        />
        <h3>{title}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>
            {channel} {isVerified ? "✅" : null}
          </h5>
          <div>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                fontSize: "10px",
                margin: "3px",
              }}
              onClick={() => handleEdit(id)}
            >
              edit
            </button>
            <button
              style={{
                backgroundColor: "red",
                fontSize: "10px",
                margin: "3px",
                color: "white",
              }}
              onClick={() => handleDelete(id)}
            >
              delete
            </button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{views} views</h5>
          <h5>{time}</h5>
        </div>
        <div>
          <PlayButton msg={title} onPlay={playVideo} onPause={pauseVideo}>
            {title}
          </PlayButton>
        </div>
      </div>
    </div>
  );
};

export default Video;
