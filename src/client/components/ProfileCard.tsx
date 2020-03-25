import React from 'react';
import { Link } from 'react-router-dom';

const AdapterLink = ((props: any) => (
    <Link {...props} />
));

const ProfileCard: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <div id="card">
                <h1>Shubham Dhage</h1>
                <div className="image-crop">
                    <img id="avatar" src="https://shubhamd99.github.io/work-showcase/img/banner/home-right.png"></img>
                </div>
                <div id="bio">
                    <p>Full stack web developer responsible for end-to-end web app development and creative cloud engineering.</p>
                </div>
                <div id="stats">
                    <div className="col">
                        <p className="stat">108</p>
                        <p className="label">Posts</p>
                    </div>
                            <div className="col">
                        <p className="stat">457</p>
                        <p className="label">Followers</p>
                    </div>
                            <div className="col">
                        <p className="stat">229</p>
                        <p className="label">Following</p>
                    </div>
                </div>
                <div id="buttons">
                    <button>Edit Profile</button>
                    <button id="msg">Settings</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileCard;