import { FC, InputHTMLAttributes, ReactHTML, ReactHTMLElement } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  ref:React.LegacyRef<HTMLInputElement> | undefined
  
}
export const Input: FC<IInput> = ({ ref,...rest}) => {
  return (
    <input
    
    ref={ref}
    {...rest}
                    />
  )
}
