import type { ImgType } from "../types/imgType";
// import starImg from "../assets/star.png";
// import squareImg from "../assets/square.png";
// import triangleImg from "../assets/triangle.png";

const star: ImgType = {
  name: "cyan",
  src: "../assets/star.png",
  alt: "cyan",
};
const square: ImgType = {
  name: "yellow",
  src: "../assets/square.png",
  alt: "yellow",
};
const triangle: ImgType = {
  name: "magenta",
  src: "../assets/triangle.png",
  alt: "magenta",
};

export const shapes: ImgType[] = [star, square, triangle];
