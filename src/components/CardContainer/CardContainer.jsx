import CardList from "../CardList/CardList";
import Loader from "../../UI/Loader/Loader";
import { useSelector } from "react-redux";



function CardContainer() {

  const responseData = useSelector((state) => state.responseData.value);


  return <>{!responseData ? <Loader /> : <CardList />}</>;
}

export default CardContainer;
