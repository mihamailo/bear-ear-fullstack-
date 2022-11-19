import { Grid, IconButton } from "@material-ui/core";
import { Pause, PlayArrow, VolumeOff, VolumeUp } from "@material-ui/icons";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "styles/Player.module.scss";
import TrackProgress from "components/TrackProgress";
import { useTypedSelector } from "hooks/useTypedSelector";
import { baseUrl } from "utils/bearApi";
import {playerSlice} from 'store/reducers/playerSlice';

const Player = () => {
  const { pause, volume, active, duration, currentTime, audio } =
    useTypedSelector(state => state.playerSliceReducer);
  const {
    pauseTrack,
    playTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    setAudio,
  } = playerSlice.actions;
  const [volumeOff, setVolumeOff] = useState<boolean>(true);
  const isInitialMount = useRef(true);

  useEffect(() => {
    console.log(active);
    if (active) {
      pauseTrack();
      audio.pause();
    }
  }, []);

  useEffect(() => {
    if (!audio && pause) {
      setAudio(new Audio());
    }
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (active) return;
    }
    // else {
    //     _setAudio()
    //     playTrack()
    //     audio.play()
    // }
    if (active) {
      _setAudio();
      playTrack();
      audio.play();
    }
  }, [active]);

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentTime(value);
    audio.currentTime = value;
  };

  const playToggle = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const _setAudio = () => {
    if (active) {
      audio.src = baseUrl + "/" + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setVolume(value);
    audio.volume = value / 100;
  };

  const muteAudio = () => {
    setVolumeOff(!volumeOff);
    if (volumeOff) {
      audio.volume = 0;
      setVolume(0);
    } else {
      audio.volume = 0.5;
      setVolume(50);
    }
  };

  if (!active) {
    return null;
  }

  return (
    <div className={s.player}>
      <IconButton onClick={playToggle} style={{ marginRight: "10px" }}>
        {!pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid className={s.trackInfo} container direction="column">
        <div className={s.trackArtist}>{active?.artist}</div>
        <div className={s.trackName}>{active?.name}</div>
      </Grid>
      <TrackProgress
        isTime={true}
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <div onClick={muteAudio}>{volumeOff ? <VolumeUp /> : <VolumeOff />}</div>
      <TrackProgress
        isTime={false}
        left={volume}
        right={100}
        onChange={changeVolume}
      />
    </div>
  );
};
export default Player;
