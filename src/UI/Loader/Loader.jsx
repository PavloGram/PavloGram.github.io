import { ThreeCircles } from "react-loader-spinner";
import { MAIN_BRAND_COLOR } from "../../globalStylesAndConstans/styleContans";


function Loader() {
  return (
   <>
<ThreeCircles
  height="100"
  width="100"
  color = {MAIN_BRAND_COLOR}
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
