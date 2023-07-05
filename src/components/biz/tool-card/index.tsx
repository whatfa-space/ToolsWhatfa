import { FC, memo } from "react";
import Image from "next/image";

interface IToolCard {
  img: string
  title: string
  desc: string
}
const ToolCard: FC<IToolCard> = ({ img, title, desc }) => (
  <div className="flex items-center border bg-base-100 p-1 rounded-md hover:shadow-md cursor-pointer transition-shadow">
    <Image src={img} width={30} height={30} alt={title}></Image>
    <div className="flex flex-col">
      <h2 className="text-sm">{title}</h2>
      <p className="text-xs">{desc}</p>
    </div>
  </div>
);

export default memo(ToolCard);
