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

    return <UserCard name={userInfo.name} location={userInfo.location} statistics={userInfo.statistics} gender={userInfo.gender} sidePhoto={userInfo.sidePhoto} profilePhoto={userInfo.profilePhoto} />;
}

function UserCard({name, location, statistics, gender, sidePhoto, profilePhoto}) {

    return (
        <article>
            <div className="side-photo">
                <img src={sidePhoto} alt={name} />
            </div>
            <div className={gender === 'male'? 'male profile-photo' : 'female profile-photo'}>
                <img src={profilePhoto} alt={name} />
            </div>
            <div className="user-info">
                <p className="name">{name}</p>
                <p className="location">{location.country}, {location.city}</p>
            </div>
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
        </article>
    );
}