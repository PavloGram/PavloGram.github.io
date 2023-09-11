import IFilm from "./IFilm";

interface IModal{
    setIsActivModal: React.Dispatch<React.SetStateAction<boolean>>;
    isActivModal: boolean;
    currentFilm: IFilm;
}

export default IModal