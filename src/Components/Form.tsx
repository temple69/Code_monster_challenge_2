import { useState } from "react";//State hook
import { CardDetailsType } from "../Types/types";//Type for cardDetails state

const Form = ({
  cardDetails,
  handleChange,
  setComponentVisible,
  resetHandler,
}: CardDetailsType) => {
  const { cardNumber, cardCvc, cardName, cardExpMM, cardExpYY } = cardDetails;//Destructuring cardDetails state
  const [isFormValid, setIsFormValid] = useState(false);//State to check if form is valid
  //Function to handle form submission
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();//Prevents default behaviour of form
    //Checks if any of the input fields are empty
    if (
      cardNumber.length === 0 ||
      cardCvc.length === 0 ||
      cardName.length === 0 ||
      cardExpMM.length === 0 ||
      cardExpYY.length === 0
    ) {
      setIsFormValid(true);//Sets isFormValid state to true
    } else {
      setIsFormValid(false);//Sets isFormValid state to false
      setComponentVisible(true);//Sets isComponentVisible state to true
      resetHandler();//Calls resetHandler function
    }
  };//Function to check if value exists
  const checkIfValueExists = (value: string): React.ReactNode => {
    //Checks if value exists
    if (value.length === 0) {
      return (
        <span className="text-[#FF5050] text-[12px]">
          {value.length === 0 ? "Can't be blank" : ""}
        </span>
      );
    }
    //Checks if value is valid
    return <span></span>;
  };
  return (
    <form className="w-[23.8125rem]" onSubmit={submitHandler}>
      <label className="block text-[#21092F] font-medium tracking-[0.125rem] my-4">
        CARDHOLDER NAME
        <input
          type="text"
          className={`block bg-transparent bg-white border border-solid border-[#6348FE] rounded-lg w-full h-[2.8125rem] px-2 ${
            isFormValid
              ? cardName.length === 0
                ? "border-[#FF5050] rounded-lg"
                : ""
              : ""
          }`}
          placeholder="e.g. Jane Appleseed"
          name="cardName"
          value={cardName}
          onChange={handleChange}
          maxLength={20}
        />
        {isFormValid ? checkIfValueExists(cardName) : ""}
      </label>

      <label className="block text-[#21092F] font-medium tracking-[0.125rem] my-4 mt-4">
        CARD NUMBER
        <input
          type="text"
          className={`block bg-transparent bg-white border border-solid border-[#6348FE] rounded-lg w-full h-[2.8125rem] px-2 ${
            isFormValid
              ? cardNumber.length === 0
                ? "border-[#FF5050] rounded-lg"
                : ""
              : ""
          }`}
          placeholder="e.g. 1234 5678 9123 0000"
          name="cardNumber"
          value={cardNumber}
          onChange={handleChange}
          maxLength={19}
        />
        {isFormValid ? checkIfValueExists(cardNumber) : ""}
      </label>

      <fieldset className="flex gap-2 items-center justify-between ">
        <legend className="block text-[#21092F] font-medium tracking-[0.125rem] relative top-6">
          EXP.DATE(MM/YY)
        </legend>
        <label className="block text-[#21092F] font-medium tracking-[0.125rem]">
          &nbsp;
          <input
            type="text"
            className={`block bg-transparent bg-white border border-solid border-[#6348FE] rounded-lg w-full  h-[2.8125rem] px-2 ${
              isFormValid
                ? cardExpMM.length === 0
                  ? "border-[#FF5050] rounded-lg"
                  : ""
                : ""
            }`}
            placeholder="MM"
            value={cardExpMM}
            maxLength={2}
            onChange={handleChange}
            name="cardExpMM"
          />
          {isFormValid ? checkIfValueExists(cardExpMM) : ""}
        </label>
        <label className="block text-[#21092F] font-medium tracking-[0.125rem]">
          &nbsp;
          <input
            type="text"
            className={`block bg-transparent bg-white border border-solid border-[#6348FE] rounded-lg w-full h-[2.8125rem] px-2 ${
              isFormValid
                ? cardExpYY.length === 0
                  ? "border-[#FF5050] rounded-lg"
                  : ""
                : ""
            }`}
            placeholder="YY"
            value={cardExpYY}
            onChange={handleChange}
            name="cardExpYY"
            maxLength={2}
          />
          {isFormValid ? checkIfValueExists(cardExpYY) : ""}
        </label>
        <label className="block text-[#21092F] font-medium tracking-[0.125rem]">
          CVC
          <input
            type="text"
            className={`block bg-transparent bg-white border border-solid border-[#6348FE] rounded-lg w-full h-[2.8125rem] px-2 ${
              isFormValid
                ? cardCvc.length === 0
                  ? "border-[#FF5050] rounded-lg"
                  : ""
                : ""
            }`}
            placeholder="123"
            name="cardCvc"
            value={cardCvc}
            onChange={handleChange}
            maxLength={3}
          />
          {isFormValid ? checkIfValueExists(cardCvc) : ""}
        </label>
      </fieldset>
      <button
        type="submit"
        className="h-[3.125rem] rounded-lg bg-[#21092F] w-full text-[1.125rem] font-medium mt-3"
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
