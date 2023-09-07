import { useSelector } from "react-redux";
import store from "../contant/store.js";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app1.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="col-span-2">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
        <h1 className="font-bold mt-4">SubScription</h1>
        <ul>
          <li>Music</li>
          <li>sport</li>
          <li>Gaming</li>
          <li>Movie</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>GOM</li>
          <li>sport</li>
          <li>Gaming</li>
          <li>Movie</li>
        </ul>
      </ul>
    </div>
  );
};

export default SideBar;
