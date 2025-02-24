'use client'
import { useRef } from "react";

type NumberInputPropType = {
  className: string;
  name: string;
  placeholder: string;
  min?: number | undefined;
  max?: number | undefined;
  intsOnly?: boolean;
}

function NumberInput(
  { 
    className, name, placeholder, min, max, intsOnly=false
  }: NumberInputPropType
) {

  const inputRef = useRef<HTMLInputElement>(null);
  const val = useRef("")


  let timeOutId: NodeJS.Timeout | undefined;
  const preventScroll = (e: React.WheelEvent<HTMLInputElement>) => {
    if (timeOutId) {
      console.log(`Clearing: ${timeOutId}`)
      clearTimeout(timeOutId);
    }
    e.currentTarget.blur()
    e.stopPropagation()
    
    timeOutId = setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0)
  }
  
  const filterChars = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case '+':
        e.preventDefault();
        break;
      case 'Backspace':
        val.current = val.current.slice(0, -1)
        break;
      case '-':
        if (typeof min === 'number' && min >= 0) e.preventDefault();
        else if (!val.current.length) val.current = "-" 
        else e.preventDefault();
        break;
      case ".":
        intsOnly ? e.preventDefault() : val.current = val.current + e.key
        break;
      default:
        val.current = val.current + e.key;
    }
  }

  const filterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const numVal: number = Number(e.target.value)
      if (typeof min === 'number' && numVal < min) {
        val.current = val.current.slice(0, -1);
        e.target.value = val.current
      } else if (typeof max === 'number' && numVal > max) {
        val.current = val.current.slice(0, -1);
        e.target.value = val.current;
      }
    }    
  }


  return(
    <input
      ref={inputRef}
      className={className}
      name={name}
      placeholder={placeholder}
      type="number"
      inputMode="decimal"
      onWheel={preventScroll}
      onKeyDown={filterChars}
      onInput={filterInput}
    />
  )
}

export default NumberInput;