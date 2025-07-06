import type { ImgType } from "../types/imgType";
// import cyanImg from "../assets/cyaan.png";
// import yellowImg from "../assets/yellow.png";
// import magentaImg from "../assets/magenta.png";

const cyan: ImgType = {
  name: "cyan",
  src: "../assets/cyaan.png",
  alt: "cyan",
};
const yellow: ImgType = {
  name: "yellow",
  src: "../assets/yellow.png",
  alt: "yellow",
};
const magenta: ImgType = {
  name: "magenta",
  src: "../assets/magenta.png",
  alt: "magenta",
};

export const colors: ImgType[] = [cyan, yellow, magenta];
