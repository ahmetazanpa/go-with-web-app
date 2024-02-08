import React from "react";

interface Card {
    id: number;
    name: string;
    email: string;

}

const CardComponent: React.FC<{ card:Card }> = ({ card }) => {
    return(
        <article className="flex flex-col bg-white shadow-lg rounded-lg p-2 mb-2 w-8/12 hover:bg-gray-100">
            <p className="text-sm text-gray-600">ID: {card.id}</p>
            <h3 className="text-lg font-semibol font-bold text-gray-800 break-words pr-2">{card.name}</h3>
            <p className="text-md text-gray-700 break-words pr-2" >{card.email}</p>
        </article>
    );
}

export default CardComponent;