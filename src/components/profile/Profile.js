import { Loader } from "components/loader/Loader";
import { getPokemonsProfile } from "components/profile/store/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./Profile.module.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const { pokemon, isLoading } = useSelector((state) => state.profile);
  const { name } = useParams();

  useEffect(() => {
    dispatch(getPokemonsProfile(name));
  }, []);

  return (
    <div className={style.profile}>
      {isLoading ? <Loader /> : null}
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon?.sprites?.front_default} />
          <h4>Stats</h4>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {pokemon?.stats?.map((item, index) => (
                    <TableCell key={index}>
                      <strong>{item?.stat?.name}</strong>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {pokemon?.stats?.map((item, index) => (
                    <TableCell key={index}>{item?.base_stat}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h4>Moves</h4>
          <ul>
            {pokemon?.moves?.map((item, index) => (
              <li key={index}>{item?.move?.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default Profile;
