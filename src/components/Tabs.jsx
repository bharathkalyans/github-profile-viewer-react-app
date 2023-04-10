import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <div className=" space-x-10">
      <button
        className={`${type === "repos" && "text-purple-800"}`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={`${type === "received_events" && "text-purple-800"}`}
        onClick={() => setType("received_events")}
      >
        Activity
      </button>
      <button
        className={`${type === "followers" && "text-purple-800"}`}
        onClick={() => setType("followers")}
      >
        Followers
      </button>
    </div>
  );
};

export default Tabs;
