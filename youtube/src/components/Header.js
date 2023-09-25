import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../config/appNavigation.js";
import { SEARCH_SUGGESTION_API, YOUTUBE_VIDEO_API } from "../config/config.js";
import store from "../config/store.js";
import { Addcache } from "../config/cache.js";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggestion, setAllSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheData = useSelector((store) => store.search.suggestion);

  useEffect(() => {
    //api call for the suggestion dat;
    const timerID = setTimeout(() => {
      if (cacheData[search]) {
        setAllSuggestion(cacheData[search]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timerID);
    };
  }, [search]);
  async function getSuggestion() {
    // console.log("API call - ", search);
    const readAble = await fetch(SEARCH_SUGGESTION_API + search);
    const data = await readAble.json();
    // console.log(data);
    setAllSuggestion(data[1]);
    dispatch(
      Addcache({
        [search]: data[1],
      })
    );
  }

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 items-center shadow-lg">
      <div className="flex gap-2 col-span-2">
        <img
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          alt=""
          onClick={toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
          className="h-8"
        />
      </div>

      <div className="col-span-8 relative">
        <input
          type="text"
          className="border-2 w-1/2 p-2 rounded-l-full border-black"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="rounded-r-full font-semibold bg-red-600 p-2.5">
          Search
        </button>
        {showSuggestion && (
          <div className="absolute  w-1/2 mt-1 p-2 rounded-lg">
            <ul>
              {suggestion.map((sug, index) => {
                return (
                  <li
                    className="bg-gray-200 p-2 rounded-lg border-b-2 border-b-gray-300 "
                    key={index}
                  >
                    {sug}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          className="h-8"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
