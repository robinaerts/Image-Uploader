import photo from "./images/photo.svg";

const Upload = (props) => {
  const dragLeave = (e) => {
    e.preventDefault();
    e.target.classList.remove("drag-over");
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("drag-over");
  };

  const dropImage = (e) => {
    e.preventDefault();
    props.setImage(e.dataTransfer.files[0]);
  };

  return (
    <div id="upload-container">
      <h3>Upload your image</h3>
      <p>File should be Jpeg, Png...</p>
      <div
        id="drag-and-drop"
        onDragOver={(e) => dragOver(e)}
        onDragLeave={(e) => dragLeave(e)}
        onDrop={(e) => dropImage(e)}
      >
        <img
          className="drag-and-drop-child"
          alt="portret"
          draggable={false}
          id="photo-image"
          src={photo}
        />
        <p className="light-text drag-and-drop-child">
          Drag & Drop your image here
        </p>
      </div>
      <p style={{ margin: "0 0 1rem 0" }} className="light-text">
        Or
      </p>
      <label htmlFor="upload" className="primary-button">
        <input
          onChange={(e) => props.setImage(e.target.files[0])}
          id="upload"
          type="file"
          style={{ display: "none" }}
        />
        Choose a file
      </label>
    </div>
  );
};

export default Upload;
