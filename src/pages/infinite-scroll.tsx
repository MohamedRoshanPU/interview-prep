import React, { useEffect, useRef, useState } from "react";

const Scroll: React.FC = () => {
  const [skip, setSkip] = useState(0);
  const [users, setUsers] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (signal: AbortSignal, skip: number) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${skip}`,
        {
          signal,
        },
      );
      const users = await response.json();
      setUsers((prev) => [...prev, ...users.users]);
      setHasMore(skip < users.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasMore) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setSkip((prev) => prev + 10);
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasMore]);

  useEffect(() => {
    const signal = new AbortController();
    fetchUsers(signal.signal, skip);
    return () => {
      signal.abort();
    };
  }, [skip]);

  return (
    <div className="py-10 flex justify-center items-center">
      <div>
        <h1 className="text-2xl mb-2">Infinite List</h1>
        <div className="p-5 bg-blue-50 rounded-2xl border w-xl h-125 flex flex-col gap-5 overflow-auto">
          {users?.map((user) => {
            return (
              <div
                key={user.id}
                className="flex justify-between items-center bg-white rounded-xl p-2 gap-5"
              >
                <div className="w-10 h-10">
                  <img
                    src={user.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between grow">
                  <div className="flex flex-col gap-1">
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <p>{user.age}</p>
                  </div>
                  <p>{user.gender}</p>
                </div>
              </div>
            );
          })}
          {hasMore && <div ref={loader}>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
