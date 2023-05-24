import {
  FC,
  useRef,
  Dispatch,
  useState,
  useEffect,
  SetStateAction,
} from 'react';

import Navigation from './Navigation';

type TimerProps = {
  seconds: number;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  changeMode: () => void;
  isNotificationsOn: boolean;
};

const Timer: FC<TimerProps> = ({
  seconds,
  setSettingsOpen,
  changeMode,
  isNotificationsOn,
}): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isPaused, setIsPaused] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeLeft(seconds);
    setIsPaused(true);
  }, [seconds]);

  useEffect(() => {
    if (!isPaused && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        return clearInterval(timerRef.current);
      }
    };
  }, [timeLeft, isPaused]);

  const minutes = Math.floor(timeLeft / 60);
  const secondsRemaining = timeLeft % 60;

  const handlePauseResume = () => {
    setIsPaused((prevState) => !prevState);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsPaused(true);
      if (isNotificationsOn) {
        alert(`Time is over`);
        setTimeLeft(seconds);
      }
    }
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`width-[404px] text-[256px] leading-[85%] ${
          timeLeft !== seconds ? 'font-extrabold' : 'font-extralight'
        } items-center mb-8`}
      >
        <p>{`${minutes < 10 ? '0' : ''}${minutes}`}</p>
        <p>{`${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`}</p>
      </div>
      <Navigation
        handlePauseResume={handlePauseResume}
        isPaused={isPaused}
        setSettingsOpen={setSettingsOpen}
        changeMode={changeMode}
      />
    </div>
  );
};

export default Timer;
