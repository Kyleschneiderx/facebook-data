import React from 'react';
import { Link } from 'react-router-dom';



const UserList = ({allUsers}) => {

    const list = (values) => (
        values ?
            values.map(user => (
                <Link
                key = {user.id}
                to={`/User/${user.id}`}
                className= "artist_item"
                >
                    <div>
                        {user.name}
                    </div>
                </Link>
            ))
        : null
    )

    return(
        <div className="artists_list">
            <h4> Ad Accounts </h4>
            <div className="artist_container">
                {list(allUsers)}

            </div>

        </div>
    )

}


export default UserList;