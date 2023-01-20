import React, { useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  TextField,
} from "@mui/material";

const Form = () => {
  const [yearly401k, setYearly401k] = useState("");
  const [input401kIsValid, setInput401kIsValid] = useState(true);

  const userInputIsValid = (userInput: string, upperLimit: Number) => {
    const inputAsNumber = Number(userInput);
    return inputAsNumber >= 0 && inputAsNumber <= upperLimit;
  };

  const handle401kInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    // no greater than current limit of $22,500
    const input401k = e.target.value;
    userInputIsValid(input401k, 22500)
      ? setInput401kIsValid(true)
      : setInput401kIsValid(false);
    setYearly401k(input401k);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // calculate stuff
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="salary" required>
          Salary
        </InputLabel>
        <OutlinedInput id="salary" type="number" required label="Salary" />
      </FormControl>

      <FormControl>
        <TextField
          error={!input401kIsValid}
          id="401k"
          type="number"
          label="Yearly 401(k) Contributions"
          value={yearly401k}
          onChange={handle401kInput}
          helperText={
            input401kIsValid
              ? ""
              : "Min $0, Max $22,500 as of 2023"
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel></InputLabel>
        <OutlinedInput />
      </FormControl>
    </form>
  );
};

export default Form;
