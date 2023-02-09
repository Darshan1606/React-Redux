import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>React Redux Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/">Posts</Link>
                        <Link to="/addPost">Add New Post</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar