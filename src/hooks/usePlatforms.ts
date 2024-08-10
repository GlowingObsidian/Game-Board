import platforms from "../data/platforms";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () => ({ data: platforms, error: null });
export default usePlatfroms;
