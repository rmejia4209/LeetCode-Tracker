import NumberInput from "./NumberInput";
import ClockIcon from "../icons/Clock";


type TimeUnitInputPropTypes = {
  problemId: number;
  name: string;
  placeholder: string;
  nextElementId?: string | undefined;
  prevElementId?: string | undefined;
  inErrorState: boolean
  resetErrorState: () => void
  maxVal?: number;
}

function TimeUnitInput(
  {
    problemId, name, placeholder, nextElementId, prevElementId, inErrorState,
    resetErrorState, maxVal=60
  }: TimeUnitInputPropTypes
) {
  return (
    <NumberInput
      id={`${name}_${problemId}`}
      className={`
        input input-bordered text-xl w-12
        ${inErrorState ? "input-error" : "input-primary"}
      `}
      placeholder={placeholder}
      name={name}
      minVal={0}
      maxVal={maxVal}
      intsOnly={true}
      nextElementId={nextElementId}
      prevElementId={prevElementId}
      onChangeAction={inErrorState ? resetErrorState: undefined}
    />
  )
}


type TimeInputPropTypes = {
  problemId: number;
  inErrorState: boolean
  resetErrorState: () => void
}

function TimeInput(
  { problemId, inErrorState, resetErrorState }: TimeInputPropTypes
){

  return (

    <fieldset>
      <legend className="flex flex-row text-xl font-bold gap-1">
        <ClockIcon/>
        Attempt Time
      </legend>
      <TimeUnitInput
        problemId={problemId}
        name="hours"
        placeholder="h"
        nextElementId="minutes"
        maxVal={23}
        inErrorState={inErrorState}
        resetErrorState={resetErrorState}
      />
      <span className="text-4xl px-1">:</span>
      <TimeUnitInput
        problemId={problemId}
        name="minutes"
        placeholder="m"
        nextElementId="seconds"
        prevElementId="hours"
        inErrorState={inErrorState}
        resetErrorState={resetErrorState}
      />
      <span className="text-4xl px-1">:</span>
      <TimeUnitInput
        problemId={problemId}
        name="seconds"
        placeholder="s"
        prevElementId="minutes"
        inErrorState={inErrorState}
        resetErrorState={resetErrorState}
      />
    </fieldset>
  )
}

export default TimeInput;