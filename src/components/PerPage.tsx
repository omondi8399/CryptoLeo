import { useContext, useRef } from "react";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

export const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let val: number = inputRef?.current?.value as unknown as number;
    if (val !== 0) {
      setPerPage(val);
      inputRef!.current!.value = val as unknown as string;
    }
  };

  return (
    <form
      className="relative flex items-center font-nunito mx-auto
          mr-12
          "
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perpage"
        className="relative flex justify-center items-center
          mr-2 font-bold
          "
      >
        per page:{" "}
      </label>
      <input
        type="number"
        name="perpage"
        min={1}
        max={250}
        ref={inputRef}
        placeholder="10"
        className="w-16 rounded bg-gray-200 placeholder:text-gray-100
      pl-2 required outline-0 border border-transparent 
      focus:border-cyan leading-4
      "
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <img src={submitIcon} alt="submit" className="w-full h-auto" />
      </button>
    </form>
  );
};
