import { Loader } from "components/loader/Loader";
import routesByName from "constants/routesByName";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemons } from "components/home/store/action";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UIForm from "components/form/UIForm";
import throttle from "lodash.throttle";
import style from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemons, hasMore, offset, isLoading } = useSelector(
    (state) => state.home
  );
  console.log(pokemons);

  useEffect(() => {
    if (offset === 1 && pokemons.length !== 12) {
      dispatch(getPokemons(0));
    }
  }, [dispatch, offset, pokemons.length]);

  const onProfileClick = (name) => {
    navigate(`${routesByName.home}/${name}`);
  };

  const scrollHandler = useCallback(
    async (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        if (hasMore && !isLoading) {
          dispatch(getPokemons(offset + 12));
        }
      }
    },
    [offset, dispatch, isLoading, hasMore]
  );
  const throttleScroller = useMemo(
    () => throttle(scrollHandler, 1000),
    [scrollHandler]
  );

  useEffect(() => {
    document.addEventListener("scroll", throttleScroller);
    return function () {
      document.removeEventListener("scroll", throttleScroller);
    };
  }, [throttleScroller]);
  return (
    <>
      <UIForm />
      <TableContainer component={Paper} className={style.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Pokemon name</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons
              ? pokemons.map((item) => (
                  <TableRow
                    key={item.url}
                    onClick={() => {
                      onProfileClick(item.name);
                    }}
                  >
                    <TableCell>
                      <p>{item.name}</p>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      {isLoading ? <Loader /> : null}
    </>
  );
};
export default Home;
