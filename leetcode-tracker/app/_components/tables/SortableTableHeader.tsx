'use client'
import Chevron from "../icons/Chevron";
import { useState, useEffect } from "react";
import * as utils from '@/app/_utils/utils'

type SortButtonPropTypes<T> ={
  className?: string;
  defaultProp: keyof T;
  propName: keyof T;
  sortProp: keyof T;
  setSortProp: React.Dispatch<React.SetStateAction<keyof T>>;
  sortArray: string[];
  setSortArray: React.Dispatch<React.SetStateAction<string[]>>;
}


function SortableTableHeader<T>(
  {
    className='', defaultProp, propName, sortProp, 
    setSortProp, sortArray, setSortArray
  }: SortButtonPropTypes<T>
) {

  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  let timeOutId: NodeJS.Timeout | undefined;
  const toggle = () => {

    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    if (!isVisible) {
      setIsVisible(true);
      setSortProp(propName);
      setSortArray([...sortArray])
    } else if (!isFlipped) {
      setIsFlipped(true);
      setSortArray([...sortArray].reverse())
    } else {
      setIsVisible(false);
      setSortProp(defaultProp)
      setSortArray([])
      timeOutId = setTimeout(() => {setIsFlipped(false)}, 100)
    }
  }

  useEffect(() => {
    console.log(sortProp)
    if (sortProp !== propName && isVisible) {
      const resetDirection = setTimeout(() => {
        setIsFlipped(false);
      }, 100);
      setIsVisible(false)
      return () => clearTimeout(resetDirection);
    }
  }, [sortProp])

  return (
    <th className={`cursor-pointer ${className}`} onClick={toggle}>
      <div className="flex flex-row gap-1">
      {utils.capitalize(propName as string)}
        <div
          className={`
            ${ isVisible ? 'opacity-100' : 'opacity-0' }
            ${ isFlipped ? 'rotate-0': 'rotate-180' }
            transition ease-in-out duration-300
          `}
        >
        <Chevron/>
        </div>
      </div>
        
    </th>
  )
}

export default SortableTableHeader;