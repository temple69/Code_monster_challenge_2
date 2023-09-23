import IconLogo from "../assets/icon.png";//This is the icon logo
import Line from "./Icons/Line";//This is the line component
import Form from "./Form";//This is the form component
import Success from "./Success";//This is the success component
import { useState } from "react";//This is the state hook
import { CardDetails } from "../Types/types";//This is the type for cardDetails state

const Interactive = () => {
    //State
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "",
    cardName: "",
    cardExpMM: "",
    cardExpYY: "",
    cardCvc: "",
  });
  //State that will be used to toggle between form and success component
  const[isComponentVisible,setComponentVisible] = useState<boolean>(false)
  //Function to handle change in input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });//Sets cardDetails state
    //Checks if input field is cardNumber, cardCvc, cardExpMM or cardExpYY
    if (
      e.target.name === "cardNumber" ||
      e.target.name === "cardCvc" ||
      e.target.name === "cardExpMM" ||
      e.target.name === "cardExpYY"
    ) {
      let value = e.target.value.replace(/\s/g, ""); // Remove existing spaces
      let numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
      if (value !== numericValue || numericValue.length > 0) {
        // Insert spaces after every four digits
        numericValue = numericValue.match(/.{1,4}/g)?.join(" ") || "";
        setCardDetails({ ...cardDetails, [e.target.name]: numericValue });//Sets cardDetails state
      }
    }
  };
  //Clears input fields
  const resetHandler = () => {
    setCardDetails({
      cardNumber: "",
      cardName: "",
      cardExpMM: "",
      cardExpYY: "",
      cardCvc: "",
    });
  }

  return (
    <>
      <section className="gridClass min-w-fit">
        <div className="backgroundImage  h-[15rem] md:h-[100vh] relative flex flex-col gap-1">
          <div className=" w-[20.8125rem] h-fit md:w-[27.9375rem] md:h-[15.3125rem] rounded-[0.625rem] gradient relative md:absolute left-5 md:left-[50px] lg:right-[-100px] px-6 py-7 md:py-4 top-[70%] md:top-[10vh] min-w-fit z-10">
            <img src={IconLogo} alt="icons" />
            <h2 className="md:text-[1.75rem] font-medium tracking-[0.21588rem] relative top-2 md:top-[80px] text-left mb-6 md:mb-0">
              {cardDetails.cardNumber
                ? cardDetails.cardNumber
                : "0000 0000 0000 0000"}
            </h2>
            <article className="flex justify-between h-full items-start md:items-center gap-4">
              <h3 className="font-bold uppercase tracking-wider md:tracking-[0]">
                {cardDetails.cardName ? cardDetails.cardName : "JANE APPLESEED"}
              </h3>
            <p>{cardDetails.cardExpMM?`${cardDetails.cardExpMM}`:"00"}/{cardDetails.cardExpYY?cardDetails.cardExpYY:"00"}</p>
            </article>
          </div>
          <div className=" w-[17.875rem] h-fit md:w-[27.9375rem] md:h-[15.3125rem] rounded-[0.625rem] gradient_two absolute  right-4 md:left-[50px] lg:right-[-200px] top-6 md:top-[53vh]  py-8 md:py-4 min-w-fit">
            <p className="h-[3.375rem] bg-[#2f2f2f]"></p>
            <article className="px-6 rounded bg-[#ADB5BE] h-[2.375rem] mx-8 py-2  my-4">
              <h4 className="text-right text-[0.875rem] font-medium tracking-[0.125rem]">
                {cardDetails.cardCvc ? cardDetails.cardCvc : "000"}
              </h4>
              <p className=" mt-4 md:mt-8 flex justify-center">
                <Line />
              </p>
            </article>
          </div>
        </div>
        <div className="flex items-center justify-center  px-4 ml-0 md:ml-20 z-30">
          {/* <Form cardDetails={cardDetails} handleChange={handleChange} /> */}
            {!isComponentVisible?<Form cardDetails={cardDetails} handleChange={handleChange} setComponentVisible={setComponentVisible} resetHandler={resetHandler}/>:''}
          { isComponentVisible && <Success />}
        </div>
      </section>
    </>
  );
};

export default Interactive;
