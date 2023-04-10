import React from "react";

const Repo = ({ info }) => {
  return (
    <>
      {info.map((value, idx) => (
        <div key={idx} className="bg-white p-3 leading-7 rounded-lg">
          <a
            href={value.html_url}
            className="text-purple-800 break-words hover:underline"
            target="_blank"
          >
            {value.full_name}
          </a>
          <div className="flex gap-x-5 text-purple-950">
            <h1>{"🟢 " + value.language}</h1>
            <h1 className="text-xs font-medium">forks : {value.forks}</h1>
            <h1 className="text-xs font-medium">
              stars : {value.stargazers_count}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repo;
