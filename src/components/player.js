import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = ({ currentSong, isPlaying, setIsplaying }) => {
  // ref
  const audioRef = useRef(null);
  // event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsplaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsplaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FaAngleLeft className="skip-back" size={32} />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" size={32} />
        ) : (
          <FaPlay onClick={playSongHandler} className="play" size={32} />
        )}
        <FaAngleRight className="skip-forward" size={32} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
