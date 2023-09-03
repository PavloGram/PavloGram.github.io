import React from 'react'
import candyCane from '../../images/candy-cane.jpg';

import {
  CardList,
  CardItem,
  CardThumb,
  CardImage,
  CardTitle,
  CardDiscriptionBlock,
  CardDiscriptionList,
  CardDiscriptionItem,
  CardDiscriptionText,
} from './CardListingStyled';
import { genres } from '../../data/genres';

function CardListing({ filmInfo, setActive, setCurrentFilm, isActivModal }) {
  return (
    <div>
      <CardList>
        {filmInfo.map(el => (
          <CardItem
            key={el.id}
            onClick={() => {
              setCurrentFilm(el);
              setActive(!isActivModal);
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
                />{' '}
              </div>
              <CardTitle>{el.title}</CardTitle>
              <CardDiscriptionBlock>
                <CardDiscriptionList>
                  {genres
                    .filter(e => {
                      if (el.genre_ids.includes(e.id)) {
                        return e;
                      } else {
                        return null;
                      }
                    })
                    .slice(0, 2)
                    .map((et, index) => (
                      <CardDiscriptionItem key={et.id}>
                        <CardDiscriptionText>
                        {el.genre_ids.length !== 1 && index !== 1 ? `${et.genre}, ` : ` ${et.genre} |`}
                           {/* {index !== 1 ? `${et.genre},` : `${et.genre} |`} */}
                         
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
      </CardList>
      {/* <Modal active={isActivModal} setActive={setIsActivModal}></Modal> */}
    </div>
  );
}

export default CardListing;


