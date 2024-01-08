"use client";

import { BsFillPauseFill, BsFillPlayFill, BsPlus } from "react-icons/bs";
import { LuTimerReset } from "react-icons/lu";
import { useState, useEffect } from "react";
import { FiMinus } from "react-icons/fi";

const Home: React.FC = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  console.log(isActive);

  useEffect(() => {
    let countdown: NodeJS.Timeout | undefined;

    if (isActive && timeLeft > 0) {
      countdown = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      const audio = document.getElementById("beep") as HTMLAudioElement;
      audio.play();

      setIsBreak(!isBreak);
      setTimerLabel(isBreak ? "Session" : "Break");
      setTimeLeft(isBreak ? sessionLength * 60 : breakLength * 60);
    } else {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [isActive, timeLeft, isBreak, sessionLength, breakLength]);

  const handleReset = () => {
    const audio = document.getElementById("beep") as HTMLAudioElement;
    audio.pause();
    audio.currentTime = 0;

    setIsActive(false);
    setIsBreak(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel("Session");
  };

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  const handleSessionLength = (session: "I" | "D") => {
    if (!isActive) {
      if (session === "D") {
        setSessionLength(Math.max(1, sessionLength - 1));
      }
      if (session === "I") {
        setSessionLength(Math.min(60, sessionLength + 1));
      }
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <main className="flex items-center justify-center min-h-screen h-full p-3 relative z-10 ">
      <section className="pt-8 p-4 bg-yellow-950/0 shadow-xl shadow-yellow-800/50 rounded-3xl max-w-[600px] w-full border-2 border-yellow-900">
        {/* Working Clock display */}
        <section className="text-center relative max-w-[350px] w-full mx-auto">
          <button
            aria-label="Working Clock display and button"
            onClick={() => setIsActive(!isActive)}
            title="Working Clock with play/pause button"
            id="start_stop"
            className="w-full border-4 border-yellow-500 relative bg-yellow-600 shadow-xl shadow-yellow-500/50 aspect-square rounded-full flex flex-col items-center justify-center"
          >
            <div id="time-left" className="text-[4rem] font-bold mt-4">
              {formatTime(timeLeft)}
            </div>
            <h3 id="timer-label" className="text-xl font-semibold">
              {timerLabel}
            </h3>
            <div className="text-4xl scale-100 hover:scale-125 absolute bottom-5 aspect-square rounded-full p-2">
              {isActive ? <BsFillPauseFill /> : <BsFillPlayFill />}
            </div>
          </button>
          <button
            id="reset"
            onClick={handleReset}
            title="reset"
            className="bg-red-600 border-2 hover:border-red-600 border-transparent hover:bg-red-600/70 text-white p-3 text-2xl rounded-full absolute right-0 bottom-0"
          >
            <LuTimerReset />
          </button>
        </section>

        {/* Working Clock setting */}
        <section
          className={`flex justify-center items-center space-x-3 mt-12 rounded-xl shadow-lg p-5 ${
            isActive ? "opacity-20 cursor-not-allowed" : "opacity-100"
          }`}
        >
          {/* break length setting */}
          <div className="text-center w-full flex flex-col justify-center items-center gap-3">
            <div className="w-32 aspect-square rounded-full flex overflow-hidden relative">
              <button
                id="break-decrement"
                title="decrease break length"
                disabled={isActive ? true : false}
                onClick={() =>
                  !isActive && setBreakLength(Math.max(1, breakLength - 1))
                }
                className="w-full border-4 text-yellow-700 border-yellow-800 hover:border-yellow-900 rounded-l-full flex items-center justify-start text-2xl pl-2"
              >
                <FiMinus />
              </button>
              <span className="absolute text-xl left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-yellow-700 p-2 rounded-full w-14 aspect-square flex items-center justify-center">
                {breakLength}
              </span>
              <button
                id="break-increment"
                title="increase break length"
                disabled={isActive ? true : false}
                onClick={() =>
                  !isActive && setBreakLength(Math.min(60, breakLength + 1))
                }
                className="w-full bg-yellow-800 hover:bg-yellow-900 rounded-r-full border-2 border-transparent flex items-center justify-end text-2xl pr-2"
              >
                <BsPlus />
              </button>
            </div>
            <h2
              id="session-label"
              className=" text-sm sm:text-lg font-semibold"
            >
              Break Length
            </h2>
          </div>

          <span className="block h-20 w-1 bg-yellow-900/50" id="divider"></span>
          {/* session length setting */}
          <div className="text-center w-full flex flex-col justify-center items-center gap-3 ">
            <div
              id="session-length"
              className="text-xl p-1 aspect-square border-2 border-yellow-600 w-20 rounded-full flex items-center justify-center bg-yellow-800 shadow-xl shadow-yellow-600/50"
            >
              {sessionLength}
            </div>
            <div className="relative rounded-full overflow-hidden flex items-center justify-center w-full">
              <button
                id="session-decrement"
                title="decrease session length"
                disabled={isActive ? true : false}
                className="p-4 rounded-l-full text-xl w-full bg-yellow-900 flex items-center justify-center border-2 border-r-0 border-transparent hover:border-yellow-600 group"
                onClick={() => handleSessionLength("D")}
              >
                <span className="group-hover:scale-125">
                  <FiMinus />
                </span>
              </button>
              <button
                id="session-increment"
                title="increase session length"
                className="p-4 rounded-r-full text-xl w-full flex items-center justify-center bg-yellow-900 border-2 border-l-0 border-transparent hover:border-yellow-600 group"
                disabled={isActive ? true : false}
                onClick={() => handleSessionLength("I")}
              >
                <span className="group-hover:scale-125">
                  <BsPlus />
                </span>
              </button>
            </div>
            <h2 id="session-label" className="text-sm sm:text-lg font-semibold">
              Time Length
            </h2>
          </div>
        </section>

        {/* beep sound when clock finish a session length*/}
        <audio
          id="beep"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </section>
    </main>
  );
};

export default Home;
