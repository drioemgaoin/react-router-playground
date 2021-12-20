import { useRoutes } from "react-router-dom";
import { HomePage } from './page/Home'
import { AboutPage } from './page/About'
import { PostPage } from './page/Post'
import { ProfilePage } from './page/Profile'
import { ExperiencePage } from './page/Experience'
import { PortfolioPage } from './page/Portfolio'
import { NotFoundPage } from './page/NotFound'
import { Navbar } from './component/Navbar'
import { NavbarItem } from './component/NavbarItem'

import logo from './logo.svg';

import './App.css';

export const App = () => {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { 
      path: '/about/*', 
      element: <AboutPage />, 
      children: [
          { index : true, element: <ProfilePage /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'experience', element: <ExperiencePage /> },
          { path: 'portfolio', element: <PortfolioPage /> },
          { path: '*', element: <NotFoundPage /> }
      ]
    },
    { 
        path: '/posts', element: <PostPage />,
        children: [
            { path: ':id', element: <PostPage /> },
            { path: 'tags/:tag', element: <PostPage /> },
        ]
    },
    { path: '*', element: <NotFoundPage /> }
  ]);

  return (
    <div className='page'>
      <header className='header'>
          <img className='header-icon' src={logo} alt="logo" />
          <Navbar>
              <NavbarItem to="/">Home</NavbarItem>
              <NavbarItem to="/about">About</NavbarItem>
              <NavbarItem to="/posts">Posts</NavbarItem>
          </Navbar>
      </header>
      <main className='body'>{routes}</main>
      <footer className='footer'>© 2021 Romain Diegoni</footer>
    </div>
  );
}
