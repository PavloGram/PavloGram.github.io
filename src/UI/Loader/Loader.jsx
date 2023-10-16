import { ThreeCircles } from "react-loader-spinner";


function Loader() {
  return (
   <>
<ThreeCircles
  height="100"
  width="100"
  color="#b92f2c"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
   </>
  );
}

export default Loader;
