import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FILTER } from "../../constants";
import { filterUsers } from "../../redux/users/usersSlice";
import "./Styles_Filter.scss";

export function Filter() {
  const { SHOW_ALL, FOLLOW, FOLLOWING } = FILTER;
  const [filter, setFilter] = useState(SHOW_ALL);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    dispatch(filterUsers(filter));
  }, [filter]);

  return (    
    <div className="Filter-container">
      <form>
        <label>Filter Users</label>
        <select onChange={handleChange} value={filter}>
          <option value={SHOW_ALL}>Show all</option>
          <option value={FOLLOWING}>Following</option>
          <option value={FOLLOW}>Follow</option>
        </select>
      </form>
    </div>
  );
}
