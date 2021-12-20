interface NavbarProps {
    children?: React.ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
    return (
        <nav className='navbar'>
            {children}
        </nav>
    )
}