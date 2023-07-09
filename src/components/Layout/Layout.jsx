import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import headerCss from './Header.module.css';
import heroCss from "../Pages/Home/Hero.module.css"

export const Layout = () => {
  return (
    <div className="container">
      <header className={headerCss.header}>
        <NavLink className={headerCss.mainTitle} to="/">
          Сервіс
        </NavLink>
        <nav>
          <NavLink className={headerCss.title} to="/price">
            Прайс
          </NavLink>
          <NavLink className={headerCss.title} to="/service-center">
            Сервіс-центри
          </NavLink>
          <NavLink className={headerCss.title} to="/about">
            Про компанію
          </NavLink>
        </nav>
        <div className={headerCss.contacts}>
          <a className={headerCss.contact} href="tel:0686868599">
            +38 (068) 68 68 599
          </a>
          <p>09:00-18:00 (пн-пт)</p>
        </div>
      </header>

      <main className={heroCss.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
