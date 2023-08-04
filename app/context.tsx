'use client'
import { createContext, useState, Dispatch, SetStateAction, ReactNode} from "react";
import { User } from "./models";

export interface UserContent{
    currentUser: User | null;
    setCurrentUser: Dispatch<SetStateAction<User>> | null;
}
export const UserContext = createContext<UserContent | null>({currentUser: null, setCurrentUser: null});

export const UserProvider = ({ children }: {children: ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User>({
    username: "BigA",
    email: "cpragnell3@yellowbook.com",
    avatar_url: "http://dummyimage.com/182x100.png/dddddd/000000",
    password: "$2a$04$H.8.1IEF5nfICzTo8TNN9OrqSj9.9egqZSm01MKkzO3Sgph12hDOu",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
