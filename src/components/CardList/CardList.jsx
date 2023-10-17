import { useMatch } from "react-router";
import Pagination from "../../UI/Pagination/Pagination";
import { genres } from "../../js/genres";


import {
  Card,
  CardItem,
  CardThumb,
  CardImage,
  CardTitle,
  CardDiscriptionBlock,
  CardDiscriptionList,
  CardDiscriptionItem,
  CardDiscriptionText,
  candyCane,
} from "./CardListStyle";


function CardList({
  filmsById,
  setFilmsById,
  setCurrentPage,
  currentPage,
  activeLoader,
  film,
  setCurrentFilm,
  setIsActivModal,
  isActivModal,
  totalPages
}) {

  const match = useMatch("/")
  const cureentFilmsArrey = !match ? filmsById : film
 
  return (
    <>
    
      <Card>
        {cureentFilmsArrey?.map((el) => (
          <CardItem
            key={el.id}
            onClick={() => {
              setCurrentFilm(el);
              setIsActivModal(!isActivModal);
            }}
          >
            <CardThumb>
              <div>
                <CardImage
                  loading="lazy"
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                      : candyCane
                  }
                />{" "}
              </div>
              <CardTitle>{el.title}</CardTitle>
              <CardDiscriptionBlock>
                <CardDiscriptionList>
                  {genres
                    .filter((e) => {
                      if (el.genre_ids?.includes(e.id)) {
                        return e;
                      } else {
                        return null;
                      }
                    })
                    .slice(0, 2)
                    .map((et, index) => (
                      <CardDiscriptionItem key={et.id}>
                        <CardDiscriptionText>
                          {Number(el.genre_ids.length) !== 1 && index !== 1
                            ? `${et.genre}, `
                            : ` ${et.genre} |`}
                        </CardDiscriptionText>
                      </CardDiscriptionItem>
                    ))}
                </CardDiscriptionList>
                <CardDiscriptionText>
                  {el.release_date && el.release_date.slice(0, 4)}
                </CardDiscriptionText>
              </CardDiscriptionBlock>
            </CardThumb>
          </CardItem>
        ))}
      </Card>
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default CardList;
