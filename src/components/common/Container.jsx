import { cn } from "../../lib/utls"

export const ConItem = ({children, className}) => {
    return <div className= {cn("w-full max-w-screen-xl  mx-auto", className)}>{children}</div>
}