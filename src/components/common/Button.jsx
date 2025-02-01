import { cn } from "../../lib/utls"

export const MyButton = ({text, className}) => {
    return <button className={ cn("md:py-4 py-2 cursor-pointer font-semibold  transition-all delay-150 px-[18px] md:px-[25px] md:text-base text-xs rounded-full text-white gradient hover:opacity-95", className)}>{text} </button>
}