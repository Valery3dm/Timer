import React, { FC, SetStateAction, Dispatch } from 'react';

type NavigationProps = {
  isPaused: boolean;
  handlePauseResume: () => void;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  changeMode: () => void;
};

const Navigation: FC<NavigationProps> = ({
  handlePauseResume,
  isPaused,
  setSettingsOpen,
  changeMode,
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <button
        className="w-[80px] h-[80px] bg-skin-fillElement flex justify-center items-center border-0 rounded-3xl"
        onClick={() => setSettingsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
      </button>
      <button
        className="w-[128px] h-[96px] bg-skin-fillController flex justify-center items-center border-0 rounded-[32px]"
        onClick={handlePauseResume}
      >
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-9 h-9"
          >
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-9 h-9"
          >
            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
          </svg>
        )}
      </button>
      <button
        className="w-[80px] h-[80px] bg-skin-fillElement flex justify-center items-center border-0 rounded-3xl"
        onClick={() => changeMode()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 002.288 1.276l6.323-3.905a1.5 1.5 0 000-2.553L12.288 4.82A1.5 1.5 0 0010 6.095v2.973a1.506 1.506 0 00-.389-.344L3.288 4.82z" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
