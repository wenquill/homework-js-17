const root = ReactDOM.createRoot(document.querySelector('.main'));
root.render(<App />);

function App() {
    const userInfo = {
        name: 'Lana Del Rey',
        location: {
            country: 'USA',
            city: 'New York',
        },
        statistics: {
            followers: '5.6M',
            following: 56,
            tracks: 278,
        },
        gender: 'female', 
        sidePhoto: 'https://cdn.salla.sa/Obmo/zHzCBKjav3ESP4NsXkosfYOY0lbyJO0Vb3ZPMwTQ.jpg',
        profilePhoto: 'https://pbs.twimg.com/media/FM4GhjrWUAYWvJI.jpg',
    }

    return <UserCard user={userInfo} />;
}

function UserCard(props) {
    const {name, location, statistics, gender, sidePhoto, profilePhoto} = props.user;

    return (
        <article>
            <UserPhoto classs='side-photo' src={sidePhoto} alt={name}/>

            <UserPhoto classs={gender === 'male'? 'male profile-photo' : 'female profile-photo'} src={profilePhoto} alt={name}/>
            
            <UserInfo name={name} location={location}/>
            
            <UserStatistics statistics={statistics}/>
        </article>
    );
}

function UserPhoto({classs, src, alt}) {
    return (
        <div className={classs}>
                <img src={src} alt={alt} />
        </div>
    );
}

function UserInfo({name, location}) {
    return (
        <div className='user-info'>
            <p className='name'>{name}</p>
            <p className='location'>{location.country}, {location.city}</p>
        </div>
    );
}

function UserStatistics({statistics}) {
    return (
        <div className="statistics">
                <div className="stat-sec">
                    <span className="criteria">FOLLOWERS</span>
                    <span className="value">{statistics.followers}</span>
                </div>
                <div className="stat-sec">
                    <span className="criteria">FOLLOWING</span>
                    <span className="value">{statistics.following}</span>
                </div>
                <div className="stat-sec">
                    <span className="criteria">TRACKS</span>
                    <span className="value">{statistics.tracks}</span>
                </div>
        </div>
    );
}