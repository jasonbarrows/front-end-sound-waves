"use client";
import { useContext, useEffect, useState } from "react";
import { User } from "./models";
import { getUsers } from "./utils/AxiosFunctions";
import UserCard from "./UserCards";
import { UserContent, UserContext } from "./context";
import Image from "next/image";
import AddWave from "./waves/AddWave";
import { UserSkeleton } from "./Skeletons";

export default function Home() {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContent;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const skeletonArray = new Array(1, 2, 3, 4, 5, 6, 7, 8);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setAllUsers(users);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="">
      <section className="flex items-center justify-end px-8 border-b-2 border-pink-700 pb-4 shadow-lg bg-white ">
        <p>
          Logged in as{" "}
          <span className="text-pink-600">{currentUser?.username}</span>{" "}
        </p>
        <img
          className="rounded-full object-cover w-8 h-8 ml-2"
          src={currentUser?.avatar_url}
          alt={`${currentUser} profile picture`}
        />
      </section>
      <div className="flex justify-between mt-4 mx-4 ">
        <h1 className="text-2xl sm:text-3xl font-extralight text-violet-900">
          Choose User:
        </h1>
        <AddWave />
      </div>
      <div className="grid grid-cols-2 gap-4 m-4">
        {isLoading
          ? skeletonArray.map((num) => {
              return <UserSkeleton key={num} />;
            })
          : allUsers.map((user) => {
              return (
                <UserCard
                  key={user.email}
                  user={user}
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              );
            })}
      </div>
    </main>
  );
}
