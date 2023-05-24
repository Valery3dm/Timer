import { FC } from 'react';

import './ToggleInput.css';

interface ToggleInputProps {
  label: string;
  onChange: () => void;
  checked: boolean;
}

const ToggleInput: FC<ToggleInputProps> = ({ label, onChange, checked }) => {
  return (
    <div className='grid grid-cols-2 items-center h-16'>
      <label htmlFor="toggle-button" className="justify-self-start">
        {label}
      </label>
      <input
        type="checkbox"
        id="toggle-button"
        onChange={() => onChange()}
        checked={checked}
        className="toggle-button bg-skin-fillToggleButton after:bg-skin-fill checked:after:bg-skin-fill checked:bg-skin-fillToggleButton justify-self-end"
      />
    </div>
  );
};

export default ToggleInput;
