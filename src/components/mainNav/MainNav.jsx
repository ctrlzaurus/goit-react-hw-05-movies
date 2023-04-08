import clsx from 'clsx';
import { routes } from '../../routes';
import { NavLink, useLocation } from 'react-router-dom';
import d from './MainNav.module.css';

const getACtiveClass = ({ isActive }) => clsx(d.link, isActive && d.active);

const MainNav = () => {
  const location = useLocation();

  return (
    <header className={d.header}>
      <nav>
        <ul className={d.list}>
          <li className={d.item}>
            <NavLink
              className={getACtiveClass}
              to={routes.HOME}
              end
            >
              Home
            </NavLink>
          </li>
          <li className={d.item}>
            <NavLink
              className={getACtiveClass}
              to={routes.MOVIES}
              state={location}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
