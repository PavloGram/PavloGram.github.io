import { css, styled } from 'styled-components';
import candyCane from './images/candy-cane.jpg';
import closeIcon from './images/close.svg';
// import { genres } from './data/genres';
// import { useEffect, useState } from 'react';
import ModalGenres from './ModalGenres';
import Button from './Button';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_WATCHED_KEY = "watched";
const LOCAL_STORAGE_QUEUE_KEY = 'queue';

let watchetArrey = []
let queueArrey = []
localStorage.setItem(LOCAL_STORAGE_WATCHED_KEY, watchetArrey)
localStorage.setItem(LOCAL_STORAGE_QUEUE_KEY, queueArrey)


const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;

  transition: 0.5s;

  ${props =>
    props.$active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
const ModalContent = styled.div`
  width: 280px;
margin-right: 17px;
  padding: 48px 20px 40px 20px;
  background-color: white;
  transform: scale(0.5);
  transition: 0.4s transform;

  ${props =>
    props.$active &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
    `}
`;
const ModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: inherit;
  transition: 1s background-color;

  cursor: pointer;

  :hover {
    background-color: #b92f2c;
    border-radius: 5px;
  }
`;
const CloseModalBtn = styled.img`
  width: 25px;
  height: 25px;
  
`;
const ModalPoster = styled.img`
  display: block;
  width: 240px;
  border-radius: 5px;
`;

const ModalDiscription = styled.div``;
const ModalTitle = styled.h2`
  margin:  20px 0 20px 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;
const ModalFilmDetailTable = styled.div`
border-collapse:separate;
border-spacing: 0;

`;
const ModalFilmDetailTr = styled.div`
display: flex;
align-items: flex-start;
word-break: break-all;
margin-bottom: 8px;

`
const ModalFilmDetailTb = styled.div`
word-break: break-all;
width: 110px;
`
const ModalFilmDetailTitle = styled.p`
color: #8C8C8C;
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.33
`
const ModalFilmDetailDiscription = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px;
`
const ModalDiscriptionTitle = styled.h3`
margin:  12px 0 8px 0;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
text-transform: uppercase;
`
const ModalDiscriptionText = styled.p`
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
margin-bottom: 30px;
`

const ModalUc = styled.span`
text-transform: uppercase;
`
const ModalRedBg = styled.span`
color: white;
background-color: #B92F2C;

border-radius: 5px;
padding: 1px 7px 1px 10px;
margin-right: 4px;
`


function Modal({ active, setActive, currentFilm }) {
  const [watched, setWatched ] = useState(false)
  const [queue, setQueue ] = useState(false)
   watchetArrey = localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY)
   queueArrey = localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY)



  function handleChangeWatchedList(){
   localStorage.setItem(LOCAL_STORAGE_WATCHED_KEY, JSON.stringify(currentFilm.id))
   
    console.log(localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY))
  }
   
  function handleChangeQueueList(){
    localStorage.removeItem(LOCAL_STORAGE_WATCHED_KEY)
    // localStorage.setItem(LOCAL_STORAGE_QUEUE_KEY, currentFilm.id)
    console.log(currentFilm.id)
  }
 
   
 
  function changeActive() {
    setActive(!active);
  }

  console.log(currentFilm);
  return (
    <ModalContainer $active={active ? 1 : 0} onClick={changeActive}>
      <ModalContent $active={active ? 1 : 0} onClick={e => e.stopPropagation()}>
        <ModalCloseBtn onClick={changeActive} type="button">
          <CloseModalBtn src={closeIcon}></CloseModalBtn>
        </ModalCloseBtn>
        <ModalPoster
          src={
            currentFilm.poster_path
              ? `https://image.tmdb.org/t/p/w500${currentFilm.poster_path}`
              : candyCane
          }
        ></ModalPoster>
        <ModalDiscription>
          <ModalTitle>{currentFilm.original_title}</ModalTitle>
          <ModalFilmDetailTable>
            <ModalFilmDetailTr>
              <ModalFilmDetailTb>
                <ModalFilmDetailTitle>Vote / Votes</ModalFilmDetailTitle>
              </ModalFilmDetailTb>
              <ModalFilmDetailTb>               
                <ModalFilmDetailDiscription><ModalRedBg>{Number(currentFilm.vote_average).toFixed(1)} </ModalRedBg>/ {currentFilm.vote_count
}</ModalFilmDetailDiscription>
              </ModalFilmDetailTb>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTb>
                <ModalFilmDetailTitle>Popularity</ModalFilmDetailTitle>
              </ModalFilmDetailTb>
              <ModalFilmDetailTb>               
                <ModalFilmDetailDiscription>{Number(currentFilm.popularity).toFixed(1)}</ModalFilmDetailDiscription>
              </ModalFilmDetailTb>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTb>
                <ModalFilmDetailTitle>Original Title</ModalFilmDetailTitle>
              </ModalFilmDetailTb>
              <ModalFilmDetailTb>               
                <ModalFilmDetailDiscription><ModalUc>{currentFilm.original_title}</ModalUc></ModalFilmDetailDiscription>
              </ModalFilmDetailTb>
            </ModalFilmDetailTr>
            <ModalFilmDetailTr>
              <ModalFilmDetailTb>
                <ModalFilmDetailTitle>Genre</ModalFilmDetailTitle>
              </ModalFilmDetailTb>
              <ModalFilmDetailTb>               
                <ModalFilmDetailDiscription>
                <ModalGenres currentFilmGenre_ids={currentFilm.genre_ids}/>
                </ModalFilmDetailDiscription>
              </ModalFilmDetailTb>
            </ModalFilmDetailTr>
          </ModalFilmDetailTable>
         <ModalDiscriptionTitle>About</ModalDiscriptionTitle>
         {/* <ModalDiscriptionText>{currentFilm.overview}</ModalDiscriptionText> */}
         <Button change={handleChangeWatchedList} text={`${watched ?` Rem` : `Add`} to watched`}></Button>
         <Button change={handleChangeQueueList} text='Add to queue'></Button>
        </ModalDiscription>
      </ModalContent>
    </ModalContainer>
  );
}
export default Modal;
