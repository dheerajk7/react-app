import React, { useState, useEffect } from "react";
import classes from "./audio_control.module.css";
import MicrophoneGifImage from "../../images/microphone-motion.gif";
import { Redirect } from "react-router-dom";
import { useReactMediaRecorder } from "@dragan1810/use-media-recorder";

function AudioControls() {
  const [startMeetingStatus, setStartMeetingStatus] = useState(false);
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    mediaBlob,
  } = useReactMediaRecorder({ video: false });

  useEffect(() => {
    console.log(mediaBlobUrl, mediaBlob, 'mediabloburl');
    if (mediaBlob) {
      var fd = new FormData();
      fd.append('path', mediaBlob);
      fetch('http://c5bb3596f4c6.ngrok.io/AudioPath', {
        headers: { Accept: "application/json" },
        method: "POST", body: fd
      });
    }
  }, [mediaBlobUrl])

  function handleLeaveMeeting() {
    stopRecording();
  }

  function handleStartMeeting() {
    setStartMeetingStatus(true);
    startRecording();
  }

  return (
    <div className={classes.audioControlMainContainer}>
      <div
        className={classes.microPhoneImageContainer}
        onClick={(event) => {
          console.log(event);
        }}
      >
        {startMeetingStatus ? (
          <iframe
            src="https://tokbox.com/embed/embed/ot-embed.js?embedId=51a139ec-80b3-401b-b680-0f13045b6ba3&room=DEFAULT_ROOM&iframe=true"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            scrolling="auto"
            allow="microphone; camera"
          ></iframe>
        ) : (
            <div
              style={{ height: "600px", width: "100%" }}
              className={classes.imageContainer}
            >
              <img src={MicrophoneGifImage} className={classes.microPhoneImage} />{" "}
            </div>
          )}
      </div>
      <div
        className={classes.leaveMeetingButton}
        style={{
          backgroundColor: startMeetingStatus ? "#bd0d0dfc" : "#007d00",
        }}
      >
        {startMeetingStatus ? (
          <span onClick={handleLeaveMeeting}>Leave Meeting</span>
        ) : (
            <span onClick={handleStartMeeting}>Start Meeting</span>
          )}
      </div>
      <audio src={mediaBlobUrl} controls autoplay loop />
    </div>
  );
}

export default AudioControls;
