import React, { useState, useRef, useEffect } from "react";
import "./Meditation.css";

const Meditation = () => {
  const [fakeDuration, setFakeDuration] = useState(600);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeDisplay, setTimeDisplay] = useState("10:00");
  const songRef = useRef(null);
  const videoRef = useRef(null);
  const playRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const song = songRef.current;
    const video = videoRef.current;
    const play = playRef.current;
    const circle = circleRef.current;

    const updateTimeDisplay = () => {
      const currentTime = song.currentTime;
      const elapsed = fakeDuration - currentTime;
      const seconds = Math.floor(elapsed % 60);
      const minutes = Math.floor(elapsed / 60);
      setTimeDisplay(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);

      const circumference = 2 * Math.PI * circle.r.baseVal.value;
      const progress = (currentTime / fakeDuration) * circumference;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference - progress;

      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        setIsPlaying(false);
        play.src = "/Meditation/svg/play.svg"; // Update path
        video.pause();
      }
    };

    const interval = setInterval(updateTimeDisplay, 1000);

    return () => clearInterval(interval);
  }, [fakeDuration]);

  const handlePlayPause = () => {
    const song = songRef.current;
    const video = videoRef.current;
    const play = playRef.current;

    if (!isPlaying) {
      song.play().catch((err) => console.error("Audio play error: ", err));
      video.play().catch((err) => console.error("Video play error: ", err));
      setIsPlaying(true);
      play.src = "/Meditation/svg/pause.svg"; // Update path
    } else {
      song.pause();
      video.pause();
      setIsPlaying(false);
      play.src = "/Meditation/svg/play.svg"; // Update path
    }
  };

  const handleReplay = () => {
    const song = songRef.current;
    song.currentTime = 0;
    if (isPlaying) {
      song.play();
    }
  };

  const handleTimeSelect = (time) => {
    setFakeDuration(time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    setTimeDisplay(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
  };

  const handleSoundClick = (soundSrc, videoSrc) => {
    const song = songRef.current;
    const video = videoRef.current;

    if (isPlaying) {
      handlePlayPause(); // Pause current sound before switching
    }

    song.src = soundSrc;
    video.src = videoSrc;
  };

  return (
    <main role="main" className="meditation-main">
      <div className="meditation-app">
        <div className="meditation-vid-container">
          <video className="videoplay"ref={videoRef} loop>
            <source src="/Meditation/video/rain.mp4" type="video/mp4" /> {/* Update path */}
          </video>
        </div>
        <div className="meditation-time-select">
          <button onClick={() => handleTimeSelect(120)}>2 Minutes</button>
          <button onClick={() => handleTimeSelect(300)} className="meditation-medium-mins">
            5 Minutes
          </button>
          <button onClick={() => handleTimeSelect(600)} className="meditation-long-mins">
            10 Minutes
          </button>
        </div>
        <div className="meditation-player-container">
          <audio ref={songRef} className="meditation-song">
            <source src="/Meditation/sounds/rain.mp3" /> {/* Update path */}
          </audio>
          <img
            ref={playRef}
            src="/Meditation/svg/play.svg" // Update path
            className="meditation-play"
            alt="play"
            onClick={handlePlayPause}
          />
          <svg className="meditation-track-outline" width="453" height="453" viewBox="0 0 453 453">
            <circle ref={circleRef} cx="226.5" cy="226.5" r="216.5" stroke="white" strokeWidth="20" fill="none" />
          </svg>
          <img
            src="/Meditation/svg/replay.svg" // Update path
            className="meditation-replay position-absolute bottom-0"
            alt="img"
            onClick={handleReplay}
          />
          <h3 className="meditation-time-display">{timeDisplay}</h3>
        </div>
        <div className="meditation-sound-picker">
          <button
            onClick={() =>
              handleSoundClick(
                "/Meditation/sounds/rain.mp3", // Update path
                "/Meditation/video/rain.mp4" // Update path
              )
            }
          >
            <img src="/Meditation/svg/rain.svg" alt="rain sound" />
          </button>
          <button
            onClick={() =>
              handleSoundClick(
                "/Meditation/sounds/beach.mp3", // Update path
                "/Meditation/video/beach.mp4" // Update path
              )
            }
          >
            <img src="/Meditation/svg/beach.svg" alt="beach sound" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Meditation;
