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
            className="w-16 rounded-full"
          />
          <h1 className="break-words">
            {value?.actor?.login}
            {value?.type}
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
