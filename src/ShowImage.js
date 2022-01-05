const ShowImage = (props) => {
  return (
    <div id="show-container">
      <svg
        id="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
      </svg>
      <h3>Uploaded Succesfully</h3>
      <img id="your-image" alt="your-image" src={props.imageUrl} />
      <div style={{ width: "340px" }}>
        <input type="text" value={props.imageUrl} id="url-input" />
        <button
          onClick={() => navigator.clipboard.writeText(props.imageUrl)}
          id="copy-button"
          className="primary-button"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShowImage;
