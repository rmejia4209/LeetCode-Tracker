'use client'
import { useState } from "react";

function Toggle() {

  const [isChecked, setIsChecked] = useState(true);
  
  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-1">Display Completed</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          onClick={handleChange}
          checked={isChecked}
        />
      </label>
    </div>
  )
}

export default Toggle;