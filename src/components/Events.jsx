import React from "react";
import { format } from "timeago.js";

const Events = ({ info }) => {
  return (
    <>
      {info.map((value, idx) => (
        <div key={idx} className="flex gap-x-4 items-center">
          <img
            src={value.actor?.avatar_url}
            alt={value.actor?.login}
            className="w-16 rounded-full border-2"
          />
          <h1 className="break-words">
            <span className="text-purple-100">{value?.actor?.login}</span>
            <br />
            <span className="text-purple-300">{value?.type}</span>
            <br />
            {value?.repo?.name}
          </h1>
          <br />
          <span>{format(value?.created_at)}</span>
        </div>
      ))}
    </>
  );
};

export default Events;
