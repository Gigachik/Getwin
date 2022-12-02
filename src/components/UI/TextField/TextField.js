import React from "react";
import { useField } from "formik";
import { TextField as TextFieldUI } from "@mui/material";

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props.field.name);

  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextFieldUI
      helperText={errorText}
      error={!!errorText}
      id="outlined-basic"
      fullWidth
      variant="standard"
      {...props}
      {...field}
    />
  );
};
