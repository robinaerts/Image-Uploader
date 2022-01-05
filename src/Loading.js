import { storage } from "./firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = (props) => {
  useEffect(() => {
    if (props.image) {
      uploadToServer();
    }
  }, []);

  const uploadToServer = () => {
    const imageRef = ref(
      storage,
      "images/" + Math.floor(Math.random() * 100000) + props.image.name
    );
    const uploadTask = uploadBytesResumable(imageRef, props.image);

    // Progress of upload is being tracked, and errors; when finished, downloadlink is shown
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          props.setImageUrl(url)
        );
      }
    );
  };

  return (
    <div id="loading-container">
      <p style={{ marginBottom: "2rem" }}>Uploading...</p>
      <LinearProgress />
    </div>
  );
};

export default Loading;
