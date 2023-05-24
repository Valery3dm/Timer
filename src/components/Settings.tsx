import { Dispatch, FC, SetStateAction } from 'react';

import ToggleInput from '../common/ToggleInput';
import NumberInput from '../common/NumberInput/NumberInput';

type ModeData = {
  id: number;
  name: string;
  seconds: number;
};

type SettingsProps = {
  toggleTheme: () => void;
  setSettingsOpen: Dispatch<SetStateAction<boolean>>;
  theme: 'light' | 'dark';
  modsList: ModeData[];
  setModsList: Dispatch<SetStateAction<ModeData[]>>;
  isNotificationsOn: boolean;
  handleNotification: () => void;
};

const Settings: FC<SettingsProps> = ({
  toggleTheme,
  setSettingsOpen,
  theme,
  modsList,
  setModsList,
  isNotificationsOn,
  handleNotification,
}): JSX.Element => {
  return (
    <div className="fixed z-1 left-0 top-0 w-full h-full bg-skin-fillBlackout">
      <div className="w-[80vw] sm:w-[450px] h-[420px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-skin-fill p-[24px] border-0 border-transparent rounded-[24px] shadow-[0px 1px 6px rgba(0, 0, 0, 0.039), 0px 5.5px 16px rgba(0, 0, 0, 0.19)]">
        <div className="grid grid-cols-2 items-center mt-[3px] mb-[18px]">
          <div className="font-bold text-2xl leading-7 tracking-[0.15px] justify-self-start">
            Settings
          </div>
          <div
            className="justify-self-end"
            onClick={() => setSettingsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <ul>
          <li>
            <ToggleInput
              label="Dark mode"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
          </li>
          <li>
            <NumberInput
              label="Focus length"
              modName="focus"
              modsList={modsList}
              setModsList={setModsList}
            />
          </li>
          <li>
            <NumberInput
              label="Short break length"
              modName="shortBreak"
              modsList={modsList}
              setModsList={setModsList}
            />
          </li>
          <li>
            <NumberInput
              label="Long break length"
              modName="longBreak"
              modsList={modsList}
              setModsList={setModsList}
            />
          </li>
          <li>
            <ToggleInput
              label="Notifications"
              onChange={handleNotification}
              checked={isNotificationsOn}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
