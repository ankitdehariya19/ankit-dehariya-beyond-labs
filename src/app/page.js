"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rahul", status: "active" },
    { id: 2, name: "Anita", status: "inactive" },
    { id: 3, name: "Vikram", status: "active" },
    { id: 4, name: "Sneha", status: "inactive" },
    { id: 5, name: "Aman", status: "active" },
  ]);

  const [name, setName] = useState();
  const [filterUser, setFilterUser] = useState();

  useEffect(() => {
    const filterData = users.filter((user, index) => {
      if (user?.name?.toLocaleLowerCase().includes(name?.toLocaleLowerCase()))
        return user;
    });

    if (filterData.length >= 0) {
      setUsers(users);
    } else {
      setUsers(filterData);
    }
  }, [name]);

  return (
    <div className="w-full h-full  ">
      <input
        type="text"
        id="name"
        name={name}
        onChange={(e) => setName(e.target.value)}
        className="border-0 outline-1"
      />
      {users ? (
        <div>
          {users?.map((item, index) => {
            return (
              <div className="flex flex-row justify-between items-center max-w-md">
                <div className=" text-white font-semibold">{item.name} </div>
                <div className=" text-white font-semibold">{item.status} </div>
              </div>
            );
          })}
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
};

export default Page;
