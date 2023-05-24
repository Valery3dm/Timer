import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ModeData = {
  id: number;
  name: string;
  seconds: number;
};

type UseThemeHookResult = {
  activeModTheme: string;
  activeModeData: ModeData;
  changeMode: () => void;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  modsList: ModeData[];
  setModsList: Dispatch<SetStateAction<ModeData[]>>;
};

const useTheme = (data: ModeData[]): UseThemeHookResult => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [modsList, setModsList] = useState<ModeData[]>(data);

  const [activeModeId, setActiveModeId] = useState(1);
  const [activeModTheme, setActiveModTheme] = useState('theme-red');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeMode = () => {
    const nextMode = activeModeId === modsList.length ? 1 : activeModeId + 1;
    setActiveModeId(nextMode);
  };

  const activeModeData = modsList.filter((el) => el.id === activeModeId)[0];

  useEffect(() => {
    const activeModThemeController = () => {
      if (theme === 'light') {
        switch (activeModeData.name) {
          case 'focus':
            setActiveModTheme('theme-red');
            break;
          case 'shortBreak':
            setActiveModTheme('theme-green');
            break;
          default:
            setActiveModTheme('theme-blue');
            break;
        }
      } else {
        switch (activeModeData.name) {
          case 'focus':
            setActiveModTheme('theme-red-dark');
            break;
          case 'shortBreak':
            setActiveModTheme('theme-green-dark');
            break;
          default:
            setActiveModTheme('theme-blue-dark');
            break;
        }
      }
    };

    activeModThemeController();
  }, [activeModeId, theme]);

  return {
    activeModTheme,
    activeModeData,
    changeMode,
    toggleTheme,
    theme,
    modsList,
    setModsList,
  };
};

export default useTheme;
