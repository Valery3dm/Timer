import React, { useState } from 'react';

import useTheme from './hooks/useTheme';

import Mode from './components/Mode';
import Settings from './components/Settings';
import Timer from './components/Timer';

import { data } from './mocks/mockData';

const App = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);

  const {
    activeModTheme,
    activeModeData,
    changeMode,
    toggleTheme,
    theme,
    modsList,
    setModsList,
  } = useTheme(data);

  const handleNotification = (): void => {
    setIsNotificationsOn(!isNotificationsOn);
  };

  return (
    <div
      className={`${activeModTheme} font-roboto bg-skin-fill text-skin-base h-screen w-screen flex flex-col pt-[169px] items-center`}
    >
      <Mode modeName={activeModeData.name} activeModTheme={activeModTheme} />
      <Timer
        seconds={activeModeData.seconds}
        setSettingsOpen={setSettingsOpen}
        changeMode={changeMode}
        isNotificationsOn={isNotificationsOn}
      />
      {settingsOpen && (
        <Settings
          toggleTheme={toggleTheme}
          setSettingsOpen={setSettingsOpen}
          theme={theme}
          modsList={modsList}
          setModsList={setModsList}
          isNotificationsOn={isNotificationsOn}
          handleNotification={handleNotification}
        />
      )}
    </div>
  );
};

export default App;
