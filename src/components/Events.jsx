import React from "react";

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
          <span style={{ fontSize: 20 }}>
            {new Date(value?.created_at).toLocaleDateString()}
          </span>
        </div>
      ))}
    </>
  );
};

export default Events;
