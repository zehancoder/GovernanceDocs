import { ConItem } from "../common/Container";
import { navItem } from "../../lib/db";
export function FootFunc() {
  return (
    <footer className="pt-5 lg:pt-24">
      <ConItem>
        <div className="flex sm:flex-row flex-col px-3 items-center justify-between gap-2.5 py-5">
          <h1 className="font-space xl:text-5xl lg:text-4xl sm:text-2xl text-xl cursor-pointer font-bold text-black">
            Ai GoverningDocs
          </h1>
          <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-4">
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
            {socialIcon.map(({img, url}, i) => (
                <a href= {url} key={i}>
                    <img src= {img} alt="" />
                </a>
            ))}
          </div>
        </div>
        <div className="mt-[20px] border-t border-transparent md:mt-[50px] lg:mt-[106px]">
            <p className="text-lg text-center leading-[18px] text-accent py-5">Ai GoverningDocs 2024. All Rights Reserved.</p>
        </div>
      </ConItem>
    </footer>
  );
}
const socialIcon = [
    {
        img: "/face.png",
        url: "#"
    },
    {
        img: "/ins.png",
        url: "#"
    },
    {
        img: "/link.png",
        url: "#"
    },
    {
        img: "/twi.png",
        url: "#"
    },
]