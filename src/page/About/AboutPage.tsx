import { Outlet } from "react-router-dom";
import { Navbar } from '../../component/Navbar'
import { NavbarItem } from '../../component/NavbarItem'

export const AboutPage = () => {
    return (
        <div className="about-page">
            <header className="header">
                <Navbar>
                    <NavbarItem isDefault to="/about/profile">Profile</NavbarItem>
                    <NavbarItem to="/about/experience">Experience</NavbarItem>
                    <NavbarItem to="/about/portfolio">Portfolio</NavbarItem>
                </Navbar>
            </header>
            <Outlet />
        </div>
    )
}