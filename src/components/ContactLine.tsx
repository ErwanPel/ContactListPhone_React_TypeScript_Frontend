import { useState } from "react";
import { usePhoneBookContext } from "../context/phoneBookContext";

export default function ContactLine(): JSX.Element {
  const [visibleDelete, setVisibleDelete] = useState<null | number>(null);

  const { phoneBook, setPhoneBook } = usePhoneBookContext();

  const deleteContact = (index: number) => {
    setPhoneBook((prev) => {
      const copyPhone = [...prev];
      copyPhone.splice(index, 1);
      return copyPhone;
    });
  };

  return (
    <div className="w-full flex flex-col gap-5 ">
      {phoneBook.map((contact, index) => {
        return (
          <div
            onMouseEnter={() => setVisibleDelete(() => index)}
            onMouseLeave={() => setVisibleDelete(() => null)}
            key={index}
            className="even:bg-slate-200 w-full p-2.5 rounded-lg  relative"
          >
            <p>{contact.name}</p>
            <p>{contact.mail}</p>
            <button
              onClick={() => deleteContact(index)}
              className={
                visibleDelete === index
                  ? "bg-red-400 p-2 rounded-md  absolute right-3 top-3 visible"
                  : "bg-red-400 p-2 rounded-md  absolute right-3 top-3 invisible"
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
