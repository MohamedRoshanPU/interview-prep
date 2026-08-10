import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

interface UserReponse {
  limit: number;
  total: number;
  skip: number;
  users: any[];
}

const LimitPagination: React.FC = () => {
  const { data, error, loading } = useFetch<UserReponse>(
    "https://dummyjson.com/users?limit=0",
  );

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const totalNoOfUsers = data?.users?.length ?? 0;

  const allUsers = [...(data?.users ?? [])];

  const paginatedUsers = allUsers.splice(offset, limit);

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setOffset(0);
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full px-10 py-16 flex justify-center">
      <div className="flex flex-col gap-1">
        <h2>Limit & Offset Pagination</h2>
        <div className="w-3xl h-150 bg-white p-5 rounded-2xl overflow-auto">
          <div className="flex flex-col gap-2">
            {paginatedUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className="p-2 border rounded-2xl h-20 flex items-center gap-5"
                >
                  <div className="w-20 h-full rounded-full border overflow-hidden">
                    <img
                      src={user.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-full grow border rounded-2xl flex justify-between p-2">
                    <div>
                      <h2>
                        {user.firstName} {user.lastName}
                      </h2>
                      <p>{user.bloodGroup}</p>
                    </div>
                    <div>
                      <p>{user.birthDate}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <button
              className="px-2 py-1 rounded-full bg-white border border-blue-400 text-xs"
              onClick={() => setOffset((prev) => prev - limit)}
              disabled={offset === 0}
            >
              {"<<"}Prev
            </button>
            <button
              className="px-2 py-1 rounded-full bg-white border border-blue-400 text-xs"
              onClick={() =>
                setOffset((prev) => {
                  if (totalNoOfUsers - offset > limit) {
                    return prev + limit;
                  } else {
                    return prev + totalNoOfUsers - offset;
                  }
                })
              }
            >
              Next {">>"}
            </button>
          </div>
          <select
            className="px-2 border border-blue-400 rounded-full bg-white text-xs"
            onChange={handleChangeLimit}
          >
            <option value={"10"}>10</option>
            <option value={"20"}>20</option>
            <option value={"30"}>30</option>
            <option value={"50"}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LimitPagination;
