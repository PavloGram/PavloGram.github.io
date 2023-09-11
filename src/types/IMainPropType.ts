import IFilm from "./IFilm";

interface IMainPropType{
    film: never[];
    setFilm: React.Dispatch<React.SetStateAction<never[]>>;
    setIsActivModal: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentFilm: React.Dispatch<React.SetStateAction<IFilm>>
    isActivModal: boolean;
}

export default IMainPropType