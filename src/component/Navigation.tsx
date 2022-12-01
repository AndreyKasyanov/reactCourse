import {Link} from 'react-router-dom'
export function Navigation() {
    return (
        <nav className="h-[50px] flex items-center justify-between px-5 bg-gray-400 text-white">
            <span className="font-bold">React</span>
            <span>
                <Link to="/" className="mr-2">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}