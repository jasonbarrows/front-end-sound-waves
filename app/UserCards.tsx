import { User } from "./models";
import { Dispatch, SetStateAction } from "react";

interface Props {
  user: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>> | null;
  currentUser: User;
}

export default function UserCard({ user, setCurrentUser, currentUser }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white border-4 rounded-xl shadow-lg p-2 active:bg-neutral-200 ${
        currentUser.username === user?.username
          ? "border-violet-600"
          : "border-white active:border-neutral-200"
      }`}
      onClick={() => {
        setCurrentUser?.(user);
      }}
    >
      <img
        className=" rounded-full  object-cover w-32 h-32 "
        src={user?.avatar_url}
      />
      <p className="mt-2 text-xl">{user?.username}</p>
    </div>
  );
}
