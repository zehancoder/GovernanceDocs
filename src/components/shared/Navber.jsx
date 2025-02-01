import { Logos } from "../common/Logo";
import { ConItem } from "../common/Container";
import { MyButton } from "../common/Button";
import { navItem } from "../../lib/db";
import { Mobile } from "./MobileRes";
import { useState } from "react";
export function NavItem() {
    const [isMenuOpen, setIsMenOpen] = useState(false);
    const toggleMenu = () => setIsMenOpen((prev) => !prev)

  return (
    <>
      <nav className="py-3 ">
        <ConItem>
          <div className="flex justify-between items-center gap-2.5 sm:px-5 px-2 xl:px-[30px] xl:py-3 bg-white rounded-full">
            <Logos />
            <div className="hidden lg:flex items-center justify-center xl:gap-4 gap-3">
              {navItem.map(({ label, link }) => (
                <a
                  href={link}
                  className="text-accent transition-colors duration-150 text-sm hover:text-primary  xl:text-base"
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2.5">
              
              <MyButton>Get Started Today</MyButton>
              <button className="lg:hidden block text-accent" onClick={toggleMenu}>
                <div className="space-y-1 cursor-pointer">
                  <span className="w-5 md:w-6 h-0.5 md:h-1 block bg-black"></span>
                  <span className="w-5 md:w-6 h-0.5  md:h-1 block bg-black"></span>
                  <span className="w-5 md:w-6 h-0.5 md:h-1 block bg-black"></span>
                </div>
              </button>
            </div>
          </div>
          {isMenuOpen && <Mobile toggleMenu={toggleMenu}/>}
        </ConItem>
      </nav>
    </>
  );
}


