'use client'
import SortableTableHeader from "./SortableTableHeader";


type SortableTableHeadersPropTypes<T> = {
  headers: {
    propName: keyof T;
    sortArray: string[];
  }[]
  className?: string;  
  defaultProp: keyof T;
  sortProp: keyof T;  
  setSortProp: React.Dispatch<React.SetStateAction<keyof T>>; 
  setSortArray: React.Dispatch<React.SetStateAction<string[]>>;
}


function SortableTableHeaders<T>(
  {
    headers, className="", defaultProp, sortProp, setSortProp, setSortArray
  }: SortableTableHeadersPropTypes<T>
) {
  return (
    <>
    {headers.map((header, idx) => (
      <SortableTableHeader<T>
        key={idx}
        className={className}
        defaultProp={defaultProp}
        propName={header.propName}
        sortProp={sortProp}
        setSortProp={setSortProp}
        sortArray={header.sortArray}
        setSortArray={setSortArray}
      />
    ))}
    </>
  )
}


export default SortableTableHeaders;