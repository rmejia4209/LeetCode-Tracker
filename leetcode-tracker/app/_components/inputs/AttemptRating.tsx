

function Star({ value, name }: {value: number, name: string}) {

  return (
    <input
      type="radio"
      value={value}
      name={name}
      className="mask mask-star-2 bg-primary" 
    />
  )
}

function AttemptRating({ name="rating" }: {name?: string}) {

  return (
      <fieldset className="rating rating-md">
        <div className="flex flex-row gap-2">
          <legend className="text-xl font-semibold">Rating: </legend>
          <div className="rating gap-2">
            {[1, 2, 3].map((val) => <Star key={val} name={name} value={val}/>)}
          </div>
        </div>
      </fieldset>
  )
}

export default AttemptRating;