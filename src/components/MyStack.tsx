import Marquee from "react-fast-marquee";
import { stacks } from "../lib/stacks";

const MyStack = () => {
  return (
    <section className="bg-black-2 py-20 px-5">
      <span className="tracking-[3px] block text-[10px] font-semibold text-gray-2">
        STACKS
      </span>
      <p className="font-semibold text-lg">Technologies I Work With</p>
      <div className="pt-3">
        <Marquee gradientWidth={"120px"} gradient gradientColor="#001122">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="border border-gray-2 rounded-2xl size-[170px] md:size-[200px] flex flex-col justify-center items-center space-y-5 mx-5"
            >
              <h1 className="text-secondary font-semibold text-lg md:text-xl">
                {stack.title}
              </h1>
              <stack.icon
                className="size-[40px] md:size-[50px]"
                strokeWidth="1"
                fill="transparent"
                color="#F7770F"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MyStack;
