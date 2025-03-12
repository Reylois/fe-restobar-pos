import React from 'react';

// Define the type for each item in the content array
interface CardItem {
  category: string;
  value: string;
  sub1: string;
  sub2?: string; // sub2 is optional since not all items have it
}

// Define the props for the Card component
interface CardProps {
  content: CardItem[];
}

const Card: React.FC<CardProps> = ({ content }) => {
  return (
    <>
      {content.map((e, index) => (
        <div
          key={index}
          className="flex flex-col w-fit h-fit p-[10px] bg-sky rounded-lg shadow-[2px_2px_5px_gray]"
        >
          <div className="w-[350px]"></div>
          <p className="text-[15px] font-medium mb-5 text-black">{e.category}</p>
          <p className="font-bold text-[30px] mb-5 text-primary">{e.value}</p>
          <div className="flex w-full gap-[50px]">
            {e.sub1 && <p className="font-medium text-[15px] text-right text-black">{e.sub1}</p>}
            <p className="font-medium text-[15px] text-right text-black">{e.sub2}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;