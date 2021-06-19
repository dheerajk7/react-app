import React, { useState, useEffect } from "react";
import { newMediaRecorder } from '../../helpers/index';

function AudioRecorder() {
  const [audioURL, setAudioURL] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    if (recorder === null) {
      if (isRecording) {
        newMediaRecorder().then(setRecorder, console.error);
      }
      return;
    }

    if (isRecording) {
      recorder.start();
    } else {
      recorder.stop();
    }

    function handleData(e) {
      setAudioURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  function startRecording() {
    setIsRecording(true);
  };

  function stopRecording() {
    setIsRecording(false);
  };

  return [audioURL, isRecording, startRecording, stopRecording];
};

export default AudioRecorder;
