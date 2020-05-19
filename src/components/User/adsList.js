import React from 'react';
import { Link } from 'react-router-dom';



const AdsList = ({allAds}) => {

    const list = (values) => (
        values ?
            values.map(user => (
                <Link
                key = {user.id}
                to={`/User/ads/${user.id}`}
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
            <div className="artist_container">
                {list(allAds)}

            </div>

        </div>
    )

}


export default AdsList;