

function ErrorAlert(
  { isVisible, msg }: {isVisible: boolean, msg: string}
) {
  return (
    <div
      role="alert"
      className={`
        bg-error w-0 min-w-[100%] p-1 text-xs rounded-lg
        text-neutral text-center font-semibold
        ${isVisible ? "visible" : "invisible"}
      `}
    >
      {msg}
    </div> 
  )
}

export default ErrorAlert;