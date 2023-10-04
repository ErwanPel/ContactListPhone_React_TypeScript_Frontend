import { Phone } from "./Contacts";
// import { useState } from "react";
import { useRef } from "react";

interface props {
  // username: string;
  // mail: string;
  // setUsername: React.Dispatch<React.SetStateAction<string>>;
  // setMail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneBook: React.Dispatch<React.SetStateAction<Phone[]>>;
}

export default function Input({
  // username,
  // setUsername,
  // mail,
  // setMail,
  setPhoneBook,
}: props): JSX.Element {
  // Function with states
  // const [error, setError] = useState("");
  // const saveOnPhoneBook = (
  //   event: React.FormEvent<HTMLFormElement>,
  //   username: string,
  //   mail: string
  // ) => {
  //   event.preventDefault();
  //   console.log("clik");
  //   if (username && mail) {
  //     setPhoneBook((prev) => {
  //       const copyPhone = [...prev];
  //       console.log(copyPhone);
  //       copyPhone.push({ name: username, mail: mail });
  //       console.log(copyPhone);
  //       return copyPhone;
  //     });
  //     setUsername("");
  //     setMail("");
  //   } else {
  //     setError("Il manque des éléments dans le formulaire");
  //   }
  // };

  const nameRef = useRef<null | HTMLInputElement>(null);
  const mailRef = useRef<null | HTMLInputElement>(null);

  const saveOnPhoneBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameRef.current && nameRef.current) {
      if (nameRef.current.value && nameRef.current.value) {
        setPhoneBook((prev) => [
          ...prev,
          { name: nameRef.current!.value, mail: mailRef.current!.value },
        ]);
      }
    }
  };

  if (nameRef.current && mailRef.current) {
    console.log(nameRef.current.value);
    console.log(mailRef.current.value);
  }
  return (
    // <form
    //   className=" w-full relative"
    //   onSubmit={(event) => saveOnPhoneBook(event, username, mail)}
    // >
    <form
      className=" w-full relative"
      onSubmit={(event) => saveOnPhoneBook(event)}
    >
      <input
        className="px-2 bg-slate-400 w-1/2 py-3 rounded-l-md text-white placeholder:text-white "
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        ref={nameRef}
        // onChange={(event) => {
        //   setError("");
        //   setUsername(event.target.value);
        // }}
        // value={username}
      />
      <input
        className="px-2 bg-slate-400 w-1/2 py-3 rounded-r-md text-white placeholder:text-white"
        type="email"
        name="mail"
        id="mail"
        placeholder="Your email"
        ref={mailRef}
        // onChange={(event) => {
        //   setError("");
        //   setMail(event.target.value);
        // }}
        // value={mail}
      />
      <button
        className="bg-blue-700 text-white p-3.5 rounded-md  absolute right-0
      top-[-2px]"
      >
        ADD
      </button>
      {/* {error && <p className="text-center mt-5 text-red-500">{error}</p>} */}
    </form>
  );
}
