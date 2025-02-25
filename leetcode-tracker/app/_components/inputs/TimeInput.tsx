import NumberInput from "./NumberInput";
import ClockIcon from "../icons/Clock";


type TimeUnitInputPropTypes = {
  name: string;
  placeholder: string;
  nextElementId?: string | undefined;
  prevElementId?: string | undefined;
  maxVal?: number;
}

function TimeUnitInput(
  {
    name, placeholder, nextElementId, prevElementId, maxVal=60
  }: TimeUnitInputPropTypes
) {
  return (
    <NumberInput
      id={name}
      className={`input input-bordered input-primary text-xl w-12`}
      placeholder={placeholder}
      name={name}
      minVal={0}
      maxVal={maxVal}
      intsOnly={true}
      nextElementId={nextElementId}
      prevElementId={prevElementId}
    />
  )
}


function TimeInput() {

  return (

    <fieldset>
      <legend className="flex flex-row text-xl font-bold gap-1">
        <ClockIcon/>
        Attempt Time
      </legend>
      <TimeUnitInput
        name="hours"
        placeholder="h"
        nextElementId="minutes"
        maxVal={23}
      />
      <span className="text-4xl px-1">:</span>
      <TimeUnitInput
        name="minutes"
        placeholder="m"
        nextElementId="seconds"
        prevElementId="hours"
      />
      <span className="text-4xl px-1">:</span>
      <TimeUnitInput
        name="seconds"
        placeholder="s"
        prevElementId="minutes"
      />
    </fieldset>
  )
}

export default TimeInput;