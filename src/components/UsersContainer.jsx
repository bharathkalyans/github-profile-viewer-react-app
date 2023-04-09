import React from "react";

const UsersContainer = ({ users }) => {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-5">
      {users &&
        users.map(
          (value, idx) =>
            value?.login && (
              <div
                key={idx}
                className="flex min-w-[230px]  mt-3 p-3 border border-gray-400 flex-col items-center rounded-lg"
              >
                <img
                  className="w-32 rounded-full mb-4 border-white border-4"
                  widht={20}
                  height={20}
                  src={value?.avatar_url}
                  alt={value?.avatar_url}
                />
                <h1 className="text-xs">{value?.login}</h1>
                <h1 className="text-xs text-teal-600">{value?.name}</h1>
                <span className="text-gray-600 bg-white my-3 font-semibold py-1 px-2 block tracking-wide rounded">
                  View
                </span>
              </div>
            )
        )}
    </div>
  );
};

export default UsersContainer;
