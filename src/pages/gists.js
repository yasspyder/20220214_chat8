import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGists, searchGists } from "../store/gists";

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(searchGists(query));
}, 1000);


const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export function GistsPage() {
  const [value, setValue] = useState("yaroslav");
  const dispatch = useDispatch();
  const { gists, pending, error, gistsSearch, errorSearch, pendingSearch } =
    useSelector((state) => state.gists);


  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsDebounced(value, dispatch);
  }, [dispatch, value]);

  if (pending || pendingSearch) {
    return <h1>pending....</h1>;
  }

  if (error || errorSearch) {
    return <h1>error....</h1>;
  }

  return (
    <div>
      <h1>GistsPage</h1>

      {gists.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      {buttons.map((button) => (
        <button onClick={() => dispatch(getGists(button))} key={button}>
          {button}
        </button>
      ))}

      <hr />

      <div>
        {gistsSearch.map((gist) => (
          <h2 key={gist.url}>{gist.url}</h2>
        ))}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter name"
        />
      </div>
    </div>
  );
}
