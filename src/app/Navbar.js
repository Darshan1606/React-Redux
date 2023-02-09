import React from 'react'
    import { useDispatch } from 'react-redux'

import { fetchNotifications } from '../features/notifications/notificationsSlice'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const dispatch = useDispatch()

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications())
    }


    return (
        <nav>
            <section>
                <h1>React Redux Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/addPost">Add New Post</Link>
                        <Link to="/">Posts</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/notifications">Notifications</Link>
                    </div>
                    <button className="button" onClick={fetchNewNotifications}>
                        Refresh Notifications
                    </button>

                </div>

            </section>
        </nav>
    )
}

export default Navbar