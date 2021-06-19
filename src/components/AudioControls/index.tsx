import React, { useState, useEffect } from "react";
import classes from "./audio_control.module.css";
import MicrophoneImage from "../../images/microphone-image.png";
import MicrophoneGifImage from "../../images/microphone-motion.gif";
import { Redirect } from "react-router-dom";
import Audio from "../AudioRecorder/index";
import { AudioRecorder } from "../../components";

function AudioControls() {
  const [startMeetingStatus, setStartMeetingStatus] = useState(false);
  let [audioURL, isRecording, startRecording, stopRecording] = AudioRecorder();
  console.log(audioURL, "audio url");

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
      {/* <div className={classes.audioControlContainer}>
        <div
          className={classes.microPhoneIcon}
          onClick={setMicOnStatus.bind({}, !micOnStatus)}
          style={{
            backgroundColor: micOnStatus ? "#000982d9" : "#ffffff",
          }}
        >
          {micOnStatus ? (
            <i
              className="fa fa-microphone-slash"
              style={{ color: micOnStatus ? "#ffffff" : "#000982d9" }}
            ></i>
          ) : (
            <i className="fa fa-microphone"></i>
          )}
        </div>
        <div className={classes.callCutButton}>
          <i className="fa fa-phone "></i>
        </div>
      </div> */}
      <div
        className={classes.leaveMeetingButton}
        style={{
          backgroundColor: startMeetingStatus ? "#bd0d0dfc" : "#007d00",
        }}
      >
        {startMeetingStatus ? (
          <span onClick={stopRecording}>Leave Meeting</span>
        ) : (
          <span onClick={startRecording}>Start Meeting</span>
        )}
      </div>
    </div>
  );
}

export default AudioControls;
