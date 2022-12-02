import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getPokemonsByType } from "components/home/store/action";
import { SelectField } from "components/UI/SelectField/SelectField";
import { TextField } from "components/UI/TextField/TextField";
import routesByName from "constants/routesByName";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./UIForm.module.scss";

const UIForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    try {
      if (values.search) {
        navigate(`${routesByName.home}/${values.search}`);
      } else {
        dispatch(getPokemonsByType(values.pokemonType));
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Grid container alignItems={"end"} justifyContent={"space-between"}>
      <Grid item xs={12}>
        <Formik
          initialValues={{
            pokemonType: "",
            search: "",
          }}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form className={style.form}>
              <Grid container columnSpacing={2} alignItems={"end"}>
                <Grid item columnSpacing={2} xs={9}>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                      <Field
                        name="pokemonType"
                        type="select"
                        label="Pokemon Type"
                        component={SelectField}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        name="search"
                        type="text"
                        label="Search By Name"
                        component={TextField}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid item marginTop={"auto"} xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Find
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};
export default UIForm;
