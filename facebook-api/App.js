import React ,{ Component } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';




class App extends Component{
    state = {
        users: [],
    }
    componentDidMount(){
        axios.get("https://graph.facebook.com/v7.0/me/adaccounts?fields=name&access_token=EAAJZAf9CHwqsBAEcRiTZB8oZAMAUa4iDD454STY4jO4SlFXWpdZAuFJgZCAldsjvKn8ZCUXt47fq3B2OvETLP3pNEDc7PzKKKnyrFguMcSZABkOZA3ZApdZBMR42SR6FlWgI0m9T6NPtNu6sK67HMEcl4wZB3o374ZBW61aSaqIP7ZB52fAYx14I5ehbvqZB8XuLpTyB0m94lepFWOHgooyGUEf6g6LKkgUKp5pTaPg09ZCWDmfNDmuZBMei4gtCUHLHrEk6e9AZD"
        )
        .then(res => {
        console.log(res.data.data)
        console.log(res.preview)
        this.setState({
            users : res.data.data,
        })
    });
    }
    render(){

        
        
        const {users} = this.state;
        const userList = users.length ? (
            users.map(user =>{
                return(
                    <div key ={user.id}>
                        
                    
                        <div>
                            {user.name}
                        <div>{user.id}</div>
                        
                            
                        </div>

                    </div>
                )
            })
        ) : (
            <div>no users yet</div>
        )
        return(
            <div container='App'>
                {userList}
                <Iframe url="https://www.facebook.com/ads/api/preview_iframe.php?d=AQJ7i9BeD_1IVmlon5yPAuWQuu7SQA0uEOuLWFyRpDSkSTz7GP14RS_vH5BwDxNeiUeN8Ta_tXzSuOU-it9GNUvIpBAdm0jWDGqSuX6yoKxffVX7vqk4TW5EZJ5KeflI0nrBhCWxTpUf103nZn7eNtkJsvYujrvXtO1Imk_86t9CfXLa10xU6xyvKIhJpdEHMDmxRxhbOABRgnlNsLE3BPsHVJcfZAN2NJNsVxXsFRl0lee0QdWUEOj6w19ZGJBuW4oz7Hy7Gzan-UFEjX7bwhHl0w_9SKtvYlRK-Xbyl32YQkXtlw0rZUAI-rkqC4HqrxrizIywORlkyH6mlL18EfDP&amp;t=AQKDl9u27WoB_8eL"
                width = "490px"
                height= "600px"/>
            </div>
            );
        }      
}


export default App;