import { FC } from "react";


interface IMessageErrorProps{
message:string
}

export const  MessageError:FC<IMessageErrorProps>=({message})=><span className="font-medium text-red-600">{message}</span>
