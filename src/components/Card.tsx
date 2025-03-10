import React from "react";

interface CardProps {
    category: string;
    content: string;
    subcontent: string;
  }

const Card: React.FC<CardProps> = ({ category, content, subcontent }) => {

    return (
        <div className="p-[15px]">
            <p>{category}</p>
            <p>{content}</p>
            <p>{subcontent}</p>
        </div>
    );
}

export default Card;
