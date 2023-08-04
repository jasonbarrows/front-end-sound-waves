import { User } from "./models";
import { Dispatch, SetStateAction } from "react";

interface Props {
  user: User;
  setCurrentUser: Dispatch<SetStateAction<User>>;
}
export default function UserCard({ user, setCurrentUser }: Props) {
  const { username, avatar_url } = user;
  return (
    <section
      className=" flex flex-row justify-center border-2 border-pink-200"
      onClick={() => {
        setCurrentUser(user);
      }}
    >
      <p className="p-2 place-self-center">{username}</p>
      <img className="m-2 w-14" src={avatar_url} />
    </section>
  );
}
