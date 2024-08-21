// TODO: this imports looks messy
import zeroImage from "../../../public/zero.webp";
import zeroLogo from "../../../public/zerologo.svg";
import microfellerImage from "../../../public/microfeller.webp";
import microfellerLogo from "../../../public/microfellerlogo.svg";
import neroImage from "../../../public/nero.webp";
import neroLogo from "../../../public/nerologo.svg";

export const COMPANIES_DATA = [
  {
    id: "zero",
    img: { src: zeroImage, alt: "Zero company" },
    logo: { src: zeroLogo, alt: "Zero company logo" },
    description: "A modern secrets manager with usability at its core.",
    link: "https://tryzero.com/",
    imagePosition: "left",
  },
  {
    id: "microfeller",
    img: { src: microfellerImage, alt: "Microfeller company" },
    logo: { src: microfellerLogo, alt: "Microfeller company logo" },
    description:
      "Our software consulting studio, focused on advanced web projects.",
    link: "https://microfeller.com/",
    imagePosition: "left",
  },
  {
    id: "nero",
    img: { src: neroImage, alt: "Nero company" },
    logo: { src: neroLogo, alt: "Nero company logo" },
    description: "An AI software engineer to increase your velocity.",
    link: "https://heynero.com/",
    imagePosition: "left",
  },
];
