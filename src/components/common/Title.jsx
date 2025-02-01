import { cn } from "../../lib/utls"
import { GraText } from "./GradientText"

export const Sectitle = ({children, className, gradient}) => {
    return <h1 className= {cn("font-space font-bold text-2xl md:text-[35px] lg:text-[46px] lg:leading-[58.7px] md:leading-[45px]", className)}>{children }<GraText>{gradient}</GraText></h1>
}