import { getPokemonsType } from "components/home/store/action";
import React, { useEffect } from "react";
import { useField } from "formik";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";

export const SelectField = ({ ...props }) => {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector((state) => state.home.types);
  useEffect(() => {
    dispatch(getPokemonsType());
  }, [dispatch]);

  const [field] = useField(props.field.name);

  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id="demo-simple-select-filled-label">Pokemon Type</InputLabel>
      <Select id="demo-simple-select" {...props} {...field}>
        {pokemonTypes
          ? pokemonTypes?.results?.map((item) => (
              <MenuItem value={item.name} key={item.name}>
                {item.name}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};
