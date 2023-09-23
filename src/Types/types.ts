 //Type for Card component
 export type CardDetails = {
  cardNumber: string;
  cardName: string;
  cardCvc: string;
  cardExpMM: string;
  cardExpYY: string;
};
//Type for CardDetails component
 export interface CardDetailsType {
  cardDetails: CardDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  resetHandler: () => void;
};
