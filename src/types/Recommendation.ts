import { StaticImageData } from "next/image";

export type Cars = {
  id?: number;
  name?: string;
  img?: StaticImageData | string | undefined;
  type?: string;
  capacity?: string;
  price?: number;
  gasoline?: string;
  gear?: string;
};
