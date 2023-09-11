import IFilm from "./IFilm";

interface ICardList {
    film: never[];
    setIsActivModal: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentFilm:React.Dispatch<React.SetStateAction<IFilm>>
    isActivModal: boolean;
  }

  export default ICardList