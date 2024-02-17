import { NavLink, Route, Routes } from 'react-router-dom';
import Markup from './Markup/Markup';
import Api from './Api/Api';
import style from './App.module.css';
export const App = () => {
  return (
    <div>
      <NavLink className={style.link} to="api">
        Api
      </NavLink>
      <NavLink className={style.link} to="markup">
        Markup
      </NavLink>

      <Routes>
        <Route path="/markup" element={<Markup />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
  );
};
