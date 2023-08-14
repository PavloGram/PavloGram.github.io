import candyCane from './images/candy-cane.jpg';

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
  opacity:1;

  :hover{
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;

  
  }
`;
const CardThumb = styled.div`
  // padding-bottom: 20px;
`;
const CardImage = styled.img`
  display: block;
  width: 280px;
  height: 402px;
  border-radius: 5px 5px 5px 5px;
`;

const CardTitle = styled.h2`
  margin: 10px 0 0 0;
  color: #000000;
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
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
  color: #b92f2c;

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

function CardListing({ filmInfo, setActive, setCurrentFilm, isActivModal }) {


  

  return (
    <>
    <CardList>
      {filmInfo.map(el => (
       
        <CardItem key={el.id}   onClick={() => {setCurrentFilm(el); setActive(!isActivModal)}} >
          <CardThumb>
            <div>
              <CardImage
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
                {  genres
                  .filter(e => {
                    if (el.genre_ids.includes(e.id)) {
                      return e
                    } else {
                      
                    return null
                    }
                  })
                  .slice(0, 2)
                  .map((et, index) => (
                    <CardDiscriptionItem key={et.id}>
                      <CardDiscriptionText>
                        {}
                      { index !== 1  ? `${et.genre},` : `${et.genre} |`    }
                        {/* {  index === 2 || count.length === 1? `${et.genre},` : `${et.genre} |`  } */}
                         {/* {arr - genres.length === 2  ?  `${et.genre},` : `${et.genre} |`} */}
                           {/* { arr.length === 3  && 1 === 2 ? `${et.genre},` : `${et.genre} |`    } */}
                         </CardDiscriptionText>
                    </CardDiscriptionItem>
                  ))}
              </CardDiscriptionList>
              <CardDiscriptionText>
                {el.release_date &&  el.release_date.slice(0, 4)}
              </CardDiscriptionText>
            </CardDiscriptionBlock>
          </CardThumb>
        </CardItem>
      ))}
    </CardList>
    {/* <Modal active={isActivModal} setActive={setIsActivModal}></Modal> */}
    </>
  );
}

export default CardListing;
