import Pagination from "../../UI/Pagination/Pagination";
import { genres } from "../../js/genres";
import noMovies from "../../images/nomovies.png";
import candyCane from "../../images/candy-cane.jpg";

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
  NotImage,
  CardWrap,
} from "./CardListStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeFilm } from "../../rtk/reducers/currentFilm";
import { changeStateActive } from "../../rtk/reducers/isActiveModal";

function CardList() {
  const responseData = useSelector((state) => state.responseData.value);
  const value = Array.isArray(responseData)
    ? responseData
    : responseData?.results;
  const dispatch = useDispatch();

  return (
    <CardWrap>
      {value.length === 0 ? (
        <NotImage src={noMovies} alt="young man" />
      ) : (
        <Card>
          {value.map((el) => (
            <CardItem
              key={el.id}
              onClick={() => {
                dispatch(changeFilm(el));

                dispatch(changeStateActive());
              }}
            >
              <CardThumb>
                <CardImage
                  loading="lazy"
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                      : candyCane
                  }
                />{" "}
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
      )}

      <Pagination />
    </CardWrap>
  );
}

export default CardList;
