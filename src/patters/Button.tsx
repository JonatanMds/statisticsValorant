interface PropsButton {
  textButton: string
}

  export function Button({textButton}:PropsButton){
  return(
    <button className="bg-purple-100 rounded p-2 inline-block text-white-100 text-xs hover:bg-purple-200">{textButton}</button>
  )
}