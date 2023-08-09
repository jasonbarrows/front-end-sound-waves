"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { User } from "./models";

export interface UserContent {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>> | null;
}
export const UserContext = createContext<UserContent | null>({
  currentUser: null,
  setCurrentUser: null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>({
    username: "BigA",
    email: "cpragnell3@yellowbook.com",
    avatar_url:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60",
    password: "$2a$04$H.8.1IEF5nfICzTo8TNN9OrqSj9.9egqZSm01MKkzO3Sgph12hDOu",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// export const AudioContext = createContext({
//   currentWave: {
//     title: null,
//     wave_url: null,
//   },
//   setCurrentWave: null,
// });

// export const AudioProvider = ({ children }) => {
//   const [currentWave, setCurrentWave] = useState();
//   return (
//     <AudioContext.Provider value={(currentWave, setCurrentWave)}>
//       {children}
//     </AudioContext.Provider>
//   );
// };
