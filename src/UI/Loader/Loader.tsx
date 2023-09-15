import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <RotatingLines
    strokeColor="#b92f2c"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  />
  );
}

export default Loader;
