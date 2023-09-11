interface ICardList {
    film: never[];
    setIsActivModal: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentFilm:React.Dispatch<React.SetStateAction<{}>>
    isActivModal: boolean;
  }

  export default ICardList