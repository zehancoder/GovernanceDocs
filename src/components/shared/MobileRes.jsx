import { navItem } from "../../lib/db";
import { Logos } from "../common/Logo";

export function Mobile ({toggleMenu}) {
    return <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
       <div className="flex justify-between items-center pb-6">
       <Logos/>
        <button className="text-black text-4xl font-semibold self-end cursor-pointer" aria-lebel = "Close Menu" onClick={toggleMenu}>
            &times;
        </button>
       </div>
       <div className="space-y-4">
        {
            navItem.map(({link, label}, i) => (
                <a href= {link} key={i} className="block text-accent text-lg hover:text-primary transition-colors duration-150">{label}</a>
            ))
        }
       </div>
    </div>
}