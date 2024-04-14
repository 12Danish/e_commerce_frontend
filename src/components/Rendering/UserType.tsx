import { createContext, useState } from "react";

type userContextValue = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<userContextValue>({
  // Provide a default value
  userType: "buyer",
  setUserType: () => {},
});
const UserType = () => {
  const [userType, setUserType] = useState("buyer");
  return { userType, setUserType };
};

export default UserType;
