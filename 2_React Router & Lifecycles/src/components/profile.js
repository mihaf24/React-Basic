import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../HOC/card';
import Auth from '../HOC/auth';

const Profile = (props)=>{
    console.log(props);
    return(
        <Auth>
            <Card>
                Profile
                <Link to={{
                    pathname: `${props.match.url}/posts `
                }} >go to /profile/posts</Link>
                
            </Card>
        </Auth>
    )
} 

export default Profile;