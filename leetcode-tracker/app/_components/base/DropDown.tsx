'use client'
import { useState } from "react";


type DropDownPropType = {
  displayText: string;
  options: string[];
  setter: (arg: string) => void;
}


function DropDown({ displayText, options, setter }: DropDownPropType) {


  const [isOpen, setIsOpen] = useState(false);

  const selectVal = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedVal = e.currentTarget.dataset.value;
    if (typeof selectedVal == 'string') {
      console.log(selectedVal)
      setter(selectedVal);
    }
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        className="btn w-fit m-1"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        {displayText}
      </button>
      <ul
        className={`
          menu absolute rounded-xl w-52 z-20 bg-base-100 shadow-2xl
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'}
          transition-opacity duration-500 ease-in-out
        `}
        >
        {options.map(
          (option, idx) => (
            <li key={idx} data-value={option} onClick={selectVal}>
              <a>{`${option.slice(0,1).toUpperCase() + option.slice(1)}`}</a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default DropDown;