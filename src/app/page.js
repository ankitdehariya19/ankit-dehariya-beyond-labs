"use client";
import React, { useState } from "react";

const Page = () => {
  const users = [
    { id: 1, name: "Rahul", status: "active" },
    { id: 2, name: "Anita", status: "inactive" },
    { id: 3, name: "Vikram", status: "active" },
    { id: 4, name: "Sneha", status: "inactive" },
    { id: 5, name: "Aman", status: "active" },
  ];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchName = user.name.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "all" || user.status === status;

    return matchName && matchStatus;
  });

  return (
    <div className="w-full h-full p-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full max-w-md"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mb-4 ml-2"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      {filteredUsers.length > 0 ? (
        <div className="space-y-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center max-w-md border p-2"
            >
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-600">{user.status}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-red-500 font-medium">No results found</div>
      )}
    </div>
  );
};

export default Page;
