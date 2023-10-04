import { useContext, createContext, useState } from "react";

type PhoneBookProviderProps = {
  children: React.ReactNode;
};

export type Phone = {
  name: string;
  mail: string;
};

type ValuePhone = {
  phoneBook: Phone[];
  setPhoneBook: React.Dispatch<React.SetStateAction<Phone[]>>;
};

const PhoneBookContext = createContext<ValuePhone | null>(null);

export default function PhoneBookProvider({
  children,
}: PhoneBookProviderProps) {
  const [phoneBook, setPhoneBook] = useState<Phone[]>([]);
  const valuePhone = {
    phoneBook,
    setPhoneBook,
  };
  return (
    <PhoneBookContext.Provider value={valuePhone}>
      {children}
    </PhoneBookContext.Provider>
  );
}

export const usePhoneBookContext = () => {
  const context = useContext(PhoneBookContext);

  if (!context) {
    throw new Error("No context for phone Book is find");
  } else {
    return context;
  }
};
