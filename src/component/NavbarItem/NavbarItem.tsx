import { Link, useLocation } from 'react-router-dom'

export interface NavbarItemProps {
    to: string
    isDefault?: boolean
    children: React.ReactNode
}

export const NavbarItem = ({ children, isDefault, to }: NavbarItemProps) => {
    const { pathname } = useLocation()

    const matchDefaultPath = isDefault && to.startsWith(pathname)
    const matchCurrentPath = to === pathname
    const matchParentPath = to !== '/' && pathname.startsWith(to)

    const className = `navbar-item ${matchDefaultPath || matchCurrentPath || matchParentPath ? 'navbar-item__selected' : ''}`
    return (
        <Link className={className} to={to}>{children}</Link>
    )
}