import React, { useRef } from "react";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
// import Webcam from "react-webcam";

// const Cameras = () => {
// const [imageSrc, setimageSrc] = React.useState("");

// const takePicture = () => {
//   let width = 500;
//   let height = width / (16/9);

// }

//   return (
//     <>
//       <Webcam
//         audio={false}
//         height={200}
//         screenshotFormat="image/jpeg"
//         // videoConstraints={videoConstraints}
//       />
//       <button onClick={takePicture}>Take Selfie</button>
//      {/* {({ getScreenshot }) => (
//           <button
//                 onClick={() => {
//                   const src = Webcam.getScreenshot();
//                   setimageSrc(src);
//                 }}
//           >
//             Capture photo
//           </button>
//       )} */}
//       {/* <img src={imageSrc} width="100" height="50" /> */}
//     </>
//   );
// }

import Webcam from "react-webcam";

const videoConstraints = {
  width: 340,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  function pad2(n) { return n < 10 ? '0' + n : n }
  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    const timeStamp = new Date().toUTCString().slice(5)
    // const timeStamp = date.getFullYear().toString() +":"+ pad2(date.getMonth() + 1)+":" + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() )
    const res = fetch(
      "https://chromeextension-2adfb-default-rtdb.firebaseio.com/userDataRecords/-NQ9LlyzMYffCdezx1RM/image.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageSrc,
          timeStamp
        }),
      }
    );

    // console.log(imageSrc);
  }, [webcamRef]);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    // if (imageUpload == null) return;
    // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
  };

  useEffect(() => {}, []);

  const timer = setTimeout(() => {
    capturePhoto();
  }, 10000);
  
  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <Webcam style={{alignItems:"center", marginLeft: "40%"}}
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      {/* <button onClick={capturePhoto}>Capture</button> */}

      {/* <button onClick={() => setUrl(null)}>Refresh</button> */}
      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </>
  );
};

export default Camera;

// export default Cameras;
