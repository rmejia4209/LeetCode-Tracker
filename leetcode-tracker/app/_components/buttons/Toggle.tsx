'use client'

type TogglePropTypes = {
  text: string;
  isChecked: boolean;
  toggleAction: () => void;
}

function Toggle({ text, isChecked, toggleAction }: TogglePropTypes) {

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text text-xs mr-1">{text}</span>
        <input
          type="checkbox"
          className="toggle toggle-xs toggle-primary"
          onChange={toggleAction}
          checked={isChecked}
        />
      </label>
    </div>
  )
}

export default Toggle;