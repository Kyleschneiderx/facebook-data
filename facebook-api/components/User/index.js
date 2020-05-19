import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AdsList from './adsList'


 
const REQ_URL = "https://graph.facebook.com/v7.0/act_163500920517380/ads?fields=effective_status%2Cname%2Ccampaign_id%2Cpreviews.ad_format(DESKTOP_FEED_STANDARD)%2Cid%2Cpreview_shareable_link&filtering=%5B%7B'field'%3A'effective_status'%2C'operator'%3A'IN'%2C'value'%3A%5B'ACTIVE'%5D%7D%5D&access_token=EAAJZAf9CHwqsBAJOccuvLRid3OfFGSZBAJK3Ez0l2niCAezebTkS6SFZCV5YQ8mI9ZAbvXZCZCKZCLymJmr1ZCreZAc5knVV2RQkMGaRItDvjtdPFZBbuXggj1EcLSFVPjKkFjE7EvRwaGZBAGvTQEso40MFQTq6Ivu2ufyZADZAvt7OsyMbXzZC1uXH2tlrozdrQXiZAkBUMkjPrTJZAEkCK5GtvVSLUkubRFE2UMWhTO0df263fnwLXe2YNAZBIkwztikNyiXYZD"


const User = (props) => {


    const [Ads, setAds] = useState()
    console.log(Ads)



    useEffect(() => {
        axios.get(`https://graph.facebook.com/v7.0/${props.match.params.userId}/ads?fields=effective_status%2Cname%2Ccampaign_id%2Cpreviews.ad_format(DESKTOP_FEED_STANDARD)%2Cid%2Cpreview_shareable_link&filtering=%5B%7B'field'%3A'effective_status'%2C'operator'%3A'IN'%2C'value'%3A%5B'ACTIVE'%5D%7D%5D&access_token=EAAJZAf9CHwqsBAJOccuvLRid3OfFGSZBAJK3Ez0l2niCAezebTkS6SFZCV5YQ8mI9ZAbvXZCZCKZCLymJmr1ZCreZAc5knVV2RQkMGaRItDvjtdPFZBbuXggj1EcLSFVPjKkFjE7EvRwaGZBAGvTQEso40MFQTq6Ivu2ufyZADZAvt7OsyMbXzZC1uXH2tlrozdrQXiZAkBUMkjPrTJZAEkCK5GtvVSLUkubRFE2UMWhTO0df263fnwLXe2YNAZBIkwztikNyiXYZD`)
        .then(res => {
            setAds(res.data.data)
            console.log(Ads)
            }).catch(error => {
                props.history.push("/home")
            })
    },[])



    return(
        <>
        <div className="artists_list">
            <h3> Ad Accounts </h3>
            <div className="artist_container">
                <AdsList allAds={Ads}/>
            </div>

        </div>
        </>
    )
}

export default User;
