import React , { Component } from 'react';
import axios from 'axios';
import UserList from './userList'


 
const URL_USER = "https://graph.facebook.com/v7.0/me/adaccounts?fields=name&access_token=EAAJZAf9CHwqsBAJOccuvLRid3OfFGSZBAJK3Ez0l2niCAezebTkS6SFZCV5YQ8mI9ZAbvXZCZCKZCLymJmr1ZCreZAc5knVV2RQkMGaRItDvjtdPFZBbuXggj1EcLSFVPjKkFjE7EvRwaGZBAGvTQEso40MFQTq6Ivu2ufyZADZAvt7OsyMbXzZC1uXH2tlrozdrQXiZAkBUMkjPrTJZAEkCK5GtvVSLUkubRFE2UMWhTO0df263fnwLXe2YNAZBIkwztikNyiXYZD"
 


class Home extends Component {

    state = {
        Users:[]
    }

    componentDidMount(){
        axios.get(URL_USER)
        .then(res => {
        this.setState({
            Users : res.data.data
        })
        })
    }







    render(){
        console.log(this.state.Users)
        return(
            <>
                <UserList allUsers={this.state.Users}/>
            </>
        )
    }

}

export default Home;

