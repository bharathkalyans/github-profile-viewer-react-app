import React from "react";

const Repo = ({ info }) => {
  return (
    <>
      {info.map((value, idx) => (
        <div key={idx} className="bg-gray-400  p-3 leading-7">
          <a
            href={value.html_url}
            className="text-teal-300 break-words hover:underline"
            target="_blank"
          >
            {value.full_name}
          </a>
          <div className="flex gap-x-5">
            <h1>{"🟢" + value.language}</h1>
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
