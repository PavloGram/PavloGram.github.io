import { genres } from "../../ts/genres";
import ICardList from "../../types/ICardList";

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
import React from "react";

interface IFilm {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function CardList({
  film,
  setCurrentFilm,
  setIsActivModal,
  isActivModal,
}: ICardList) {
  return (
    <React.Fragment>
      <Card>
        {film.map((el: IFilm) => (
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
                      if (el.genre_ids.includes(e.id as never)) {
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
    </React.Fragment>
  );
}

export default CardList;
