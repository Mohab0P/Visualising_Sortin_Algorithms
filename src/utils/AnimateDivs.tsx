// AnimateDivs.tsx
import { Dispatch, SetStateAction } from "react";

const AnimateDivs = (
  dupBlocks: number[],
  animArr: number[][],
  speed: number,
  setArray: Dispatch<SetStateAction<number[]>>
) => {
  animArr.forEach(([first, second], index) => {
    setTimeout(() => {
      const div1 = document.getElementById(`${first}`) as HTMLElement;
      const div2 = document.getElementById(`${second}`) as HTMLElement;

      if (!div1 || !div2) return;

      // Apply classes for animation
      div1.classList.add("bg-red-500");
      div2.classList.add("bg-red-500");

      const tempHeight = div1.style.height;
      div1.style.height = div2.style.height;
      div2.style.height = tempHeight;

      setTimeout(() => {
        // Remove animation classes and reset colors
        div1.classList.remove("bg-red-500");
        div1.classList.add("bg-emerald-600");
        div2.classList.remove("bg-red-500");
        div2.classList.add("bg-emerald-600");

        // On last iteration, update the array to reflect the final sorted array
        if (index === animArr.length - 1) {
          setArray(dupBlocks);
        }
      }, speed);
    }, index * speed);
  });
};

export default AnimateDivs;
