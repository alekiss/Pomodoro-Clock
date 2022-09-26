import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlayButton, PauseButton, SettingsButton, Container } from "./styles";
import { HiOutlineCog } from "react-icons/hi";
import { FiPlay, FiPause } from "react-icons/fi";
import SettingsContext from "../../context/SettingsContex";

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work,break,null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const secondsLeftRef = useRef(secondsLeft);

  const settingsInfo = useContext(SettingsContext);

  const initTimer = () => {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  };

  const switchMode = () => {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;
    modeRef.current = nextMode;
    setMode(nextMode);
    secondsLeftRef.current = nextSeconds;
    setSecondsLeft(nextSeconds);
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  // if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? "#f54e4e" : "#4aec8c",
          trailColor: "rgba(255,255,255,0.2)",
        })}
      />
      <Container>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          >
            <FiPlay />
          </PlayButton>
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          >
            <FiPause />
          </PauseButton>
        )}

        <SettingsButton
          onClick={() => settingsInfo.handlerButton((prev: boolean) => !prev)}
        >
          <HiOutlineCog />
          Settings
        </SettingsButton>
      </Container>
    </>
  );
};

export default Timer;
