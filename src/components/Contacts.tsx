import ContactLine from "./ContactLine";
import Input from "./Input";
import { useState } from "react";

export type Phone = {
  name: string;
  mail: string;
};

export default function Contacts(): JSX.Element {
  //   const [username, setUsername] = useState("");
  //   const [mail, setMail] = useState("");
  const [phoneBook, setPhoneBook] = useState<Phone[]>([]);

  return (
    <main className="border-black border-solid border-[1px] container max-w-[600px] p-3.5 rounded-2xl mx-auto flex flex-col items-center gap-8">
      <h1 className="text-center text-4xl mb-4 text-purple-800">Contacts</h1>
      <ContactLine phoneBook={phoneBook} setPhoneBook={setPhoneBook} />
      <Input
        // username={username}
        // setUsername={setUsername}
        // mail={mail}
        // setMail={setMail}
        setPhoneBook={setPhoneBook}
      />
    </main>
  );
}
