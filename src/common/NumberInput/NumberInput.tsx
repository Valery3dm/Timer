import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import './NumberInput.css';

type ModeData = {
  id: number;
  name: string;
  seconds: number;
};

interface NumberInputProps {
  label: string;
  modName: string;
  modsList: ModeData[];
  setModsList: Dispatch<SetStateAction<ModeData[]>>;
}

const NumberInput: FC<NumberInputProps> = ({
  label,
  modName,
  modsList,
  setModsList,
}): JSX.Element => {
  const currentValue = modsList.filter((el) => el.name === modName)[0].seconds;

  const [count, setCount] = useState<number>(currentValue);

  useEffect(() => {
    setModsList((prevState) =>
      prevState.map((el) => (el.name === modName ? { ...el, seconds: count } : el)),
    );
  }, [count]);

  return (
    <div className="grid grid-cols-2 items-center h-16">
      <label htmlFor="number-input" className="justify-self-start">
        {label}
      </label>
      <div className="justify-self-end">
        <div className="flex flex-row">
          <input
            type="number"
            id="number-input"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="bg-skin-fill text-center border-[1px] border-skin-inputColor rounded-l-lg w-[66px] h-[40px]"
          />
          <div className="flex flex-col">
            <button
              className="flex justify-center items-center w-[30px] h-[20px] bg-skin-inputColor border-[1px] border-l-transparent rounded-tr-lg border-skin-inputColor"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <div className="w-0 h-0 border-x-[6px] border-x-transparent border-b-[8px] border-skin-base" />
            </button>
            <button
              className="flex justify-center items-center w-[30px] h-[20px] bg-skin-inputColor border-b-[1px]  border-r-[1px] rounded-br-lg border-skin-inputColor"
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              <div className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-skin-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
