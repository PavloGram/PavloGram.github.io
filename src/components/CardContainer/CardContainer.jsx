import { useEffect } from 'react';
import fetchFilms from '../../js/fetchFilms';
import CardListing from '../CardListing/CardListing';





function CardContainer({film, setFilm, setActive, setCurrentFilm, isActivModal}) {
  

  useEffect(() => {
    fetchFilms()
      .then(res => {
       
        return setFilm(res.results);
      })
      .catch(er => {
        console.log(er.message);
      });
  }, [setFilm]);

  return (


<CardListing filmInfo={film} setActive={setActive} isActivModal={isActivModal}  setCurrentFilm={setCurrentFilm}></CardListing>
)
  ;
}

export default CardContainer;
