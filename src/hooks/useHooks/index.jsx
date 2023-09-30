import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";

const useHooks = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  return {
    location,
    navigate,
    params,
    qs,
  };
};

export default useHooks;
