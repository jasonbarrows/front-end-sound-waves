"use client";
import { useContext, useEffect, useState } from "react";
import { User } from "./models";
import { getUsers } from "./utils/AxiosFunctions";
import UserCard from "./UserCards";
import { UserContext } from "./context";

export default function Home() {
  //
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setAllUsers(users);
    });
  }, []);

  return (
    <main className="m-4">
      <section className="flex flex-row">
        <p>Current user:</p>
        <UserCard user={currentUser} setCurrentUser={setCurrentUser} />
      </section>
      {allUsers.map((user) => {
        return (
          <UserCard
            key={user.email}
            user={user}
            setCurrentUser={setCurrentUser}
          />
        );
      })}
    </main>
  );
}
