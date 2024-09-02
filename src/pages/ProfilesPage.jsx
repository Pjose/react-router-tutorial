import { NavLink, Outlet } from "react-router-dom"

const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5]

    return (
        <div className="flex-gap-2">
            <div className="flex-col-gap-2">
                {profiles.map((profile) => (
                    <NavLink 
                        key={profile} 
                        to={`/profiles/${profile}`}
                        className={({ isActive }) => {
                            return isActive ? 'selected-link' : '';
                        }}
                    >
                        Profile {profile}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default ProfilesPage