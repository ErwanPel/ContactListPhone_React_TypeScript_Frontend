// import { useState } from "react";
import { useRef, useEffect } from "react";
import { usePhoneBookContext } from "../context/phoneBookContext";

// interface props {
// username: string;
// mail: string;
// setUsername: React.Dispatch<React.SetStateAction<string>>;
// setMail: React.Dispatch<React.SetStateAction<string>>;
// }
// export default function Input({
//   // username,
//   // setUsername,
//   // mail,
//   // setMail,

// }: props): JSX.Element {
export default function Input(): JSX.Element {
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

  const { setPhoneBook } = usePhoneBookContext();

  const nameRef = useRef<HTMLInputElement>(null!);
  const mailRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, [setPhoneBook]);

  if (nameRef.current && mailRef.current) {
    nameRef.current.value = "";
    mailRef.current.value = "";
    nameRef.current.focus();
  }

  return (
    // <form
    //   className=" w-full relative"
    //   onSubmit={(event) => saveOnPhoneBook(event, username, mail)}
    // >
    <form
      className=" w-full relative"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (nameRef.current.value && mailRef.current.value && setPhoneBook) {
          setPhoneBook((prev) => [
            ...prev,
            {
              name: nameRef.current.value,
              mail: mailRef.current.value,
            },
          ]);
        }
      }}
    >
      <input
        className="px-2 bg-slate-400 w-1/2 py-3 rounded-l-md text-white placeholder:text-white "
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        ref={nameRef}
        required
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
        required
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
