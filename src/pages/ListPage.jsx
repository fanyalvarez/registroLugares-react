import { PlacesList } from "../components/Place/PlacesList";
import { PlacesListUser } from "../components/Place/PlacesListUser";

export function ListPage() {
  // const login = JSON.parse(localStorage.getItem("login"));
  // console.log(login);zz
  return (
    <div className="center">
      {/* {login ? <PlacesListUser /> : <PlacesList />} */}
      <PlacesList />
    </div>
  );
}
