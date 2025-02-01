import { cn } from "../../lib/utls"

export const GraText = ({children, className}) => {
    return <span className= {cn("bg-gradient-to-b from-[#00d2ff] to-[#059dbe] bg-clip-text text-transparent", className)}> 
    {children}</span>
}