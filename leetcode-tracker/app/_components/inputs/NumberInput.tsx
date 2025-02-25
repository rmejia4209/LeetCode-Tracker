'use client'
import { useRef } from "react";

type NumberInputPropType = {
  id: string;
  className: string;
  name: string;
  placeholder: string;
  minVal?: number | undefined;
  maxVal?: number | undefined;
  nextElementId?: string | undefined;
  prevElementId?: string | undefined;
  intsOnly?: boolean;
}

function NumberInput(
  { 
    id, className, name, placeholder, minVal, maxVal, nextElementId,
    prevElementId, intsOnly=false, 
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
      case "ArrowRight":
      case "Enter":
        if (nextElementId) {
          e.preventDefault();
          document.getElementById(nextElementId)?.focus();
        }
        break;
      case "ArrowLeft":
        if (prevElementId) {
          e.preventDefault();
          document.getElementById(prevElementId)?.focus();
        }
        break;
      case '+':
        e.preventDefault();
        break;
      case 'Backspace':
        val.current = val.current.slice(0, -1)
        break;
      case '-':
        if (typeof minVal === 'number' && minVal >= 0) e.preventDefault();
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
      if (typeof minVal === 'number' && numVal < minVal) {
        val.current = val.current.slice(0, -1);
        e.target.value = val.current
      } else if (typeof maxVal === 'number' && numVal > maxVal) {
        val.current = val.current.slice(0, -1);
        e.target.value = val.current;
      }
    }    
  }


  return(
    <input
      id={id}
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