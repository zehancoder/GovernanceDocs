import { cn } from "../../lib/utls"

export const MyButton = ({children, className}) => {
    return <button className={ cn("md:py-4 py-3 cursor-pointer font-semibold  transition-all delay-150 px-[18px] md:px-[25px] md:text-base text-base rounded-full text-white gradient hover:opacity-95", className)}>{children} </button>
}