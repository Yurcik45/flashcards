import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryWords } from '../../redux/actions/words';
import "./CategoryNav.css";

const CategoryNav = ({ userName, categories, currentCategory, setCurrentCategory }) => {
  const dispatch = useDispatch();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const changeCategory = (e, name) => {
    console.log('name', name);
    const catName = e.target.getAttribute('name');
    categories.forEach(cat => {
      cat.active = false;
      if (cat.name === catName) cat.active = true;
    })
    localStorage.setItem('category', name);
    forceUpdate();
    setCurrentCategory(name);
    dispatch(getCategoryWords(userName, name))
  }
  return (
    <div className="CategoryNav">
      <div className="CategoryConatainer">
        {categories.map((item, id) => {
          return <div
            key={id}
            onClick={(e) => changeCategory(e, item.db_name)}
            className={item.active ? "CategoryItem active" : "CategoryItem"}
            name={item.name}
          >{item.name.toUpperCase()}</div>;
        })}
      </div>
    </div>
  );
};

export default CategoryNav;
