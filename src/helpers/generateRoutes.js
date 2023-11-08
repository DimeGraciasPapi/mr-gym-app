import { Route } from "react-router-dom";
import { DATA } from "../data";
import SecondGymPage from "../components/GymPage/second";

function generateRoutes(rutine) {
  const rutines = {
    cardio: {
      route: "cardio-ritmo",
      search: "cardio",
      index: 0
    },
    fuerza: {
      route: "fuerza-resistencia",
      search: "fuerza",
      index: 1
    },
    cuerpo: {
      route: "cuerpo-mente",
      search: "cuerpo",
      index: 2
    }
  }

  const info = rutines[rutine];

  return (
    DATA.GymGo[info.index].list.map((item, index) => (
      <Route 
        key={index}
        path={`/mr-gym-go/${info.route}/${item.to}`}
        element={<SecondGymPage mainSearch={info.search} secondSearch={item.to} />}
      />
    ))
  ); 
}

export default generateRoutes;
