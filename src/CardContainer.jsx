import { useEffect, useState } from 'react';
import fetchFilms from './fetchFilms';
import { styled } from 'styled-components';
import { genres } from './data/genres';

const CardList = styled.ul`
margin-top: 20px;
margin-bottom: 20px;
  padding: 0;
`;
const CardItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
`;
const CardThumb = styled.div`
  // padding-bottom: 20px;
`;
const CardImage = styled.img`
  display: block;
  width: 280px;
  height: 398px;
  padding-bottom: 10px;
  border-radius: 5px 5px 5px 5px;
  overflow:hidden;
  `;
const CardTitle = styled.h2`
  margin: 0;
  color: #000000;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  // margin-top: 10px;
  line-height: 1.17;
`;

const CardDiscriptionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;
const CardDiscriptionItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  // padding-left: 2px;
`;
const CardDiscriptionText = styled.p`
color: #B92F2C;

font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px;
padding-right: 2px;
  margin: 0;
`;

const CardDiscriptionBlock = styled.div`
  display: flex;
`;

function CardContainer() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchFilms()
      .then(res => {
        console.log(res.results);
        return setFilm(res.results);
      })
      .catch(er => {
        console.log(er.message);
      });
  }, []);

  return (
    <CardList>
      {film.map(el => (
        <CardItem key={el.id}>
          <CardThumb>
            <CardImage
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            />
            <CardTitle>{el.title}</CardTitle>
            <CardDiscriptionBlock>
              <CardDiscriptionList>
                {genres
                  .filter(e => {
                    if (el.genre_ids.includes(e.id)) {
                      return e;
                    }
                  })
                  .slice(0, 2)
                  .map((et, index )=> (
                    <CardDiscriptionItem key={et.id}>
                      <CardDiscriptionText>{index !== 1 ?  `${et.genre},`: et.genre} </CardDiscriptionText>
                    </CardDiscriptionItem>
                  ))}
              </CardDiscriptionList>
              <CardDiscriptionText>
                | {el.release_date.slice(0, 4)}
              </CardDiscriptionText>
            </CardDiscriptionBlock>
          </CardThumb>
        </CardItem>
      ))}
    </CardList>
  );
}

export default CardContainer;
