import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleErrors = (error: unknown) => {
  if (error instanceof Error) {
    // Native JS Error
    console.error(error.message);
    throw new Error(`Error : ${error.message}`);
  } else if (typeof error == "string") {
    // string error message
    console.error(error);
    throw new Error(`Error : ${error}`);
  } else {
    //unknown type of error
    console.error(error);
    throw new Error(`Unknown Error : ${JSON.stringify(error)}`);
  }
};
