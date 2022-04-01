import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div className='inline'>
            <Link className='px-2 py-1 hover:bg-red-400 mx-2 rounded'
                style={{ color: match ? 'lime' : '', border: match ? '2px solid white' : '' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;
