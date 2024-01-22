import { FieldValues } from "react-hook-form";

export interface UserInterface{
    // onNextClick:()=> void
}

export type Props = {
    onNextClick: (data:FieldValues) => void;
    data?: string;
  };