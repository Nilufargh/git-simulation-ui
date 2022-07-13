import profileStyler from "../styles/Profile.module.css"


function Profile({profileData}) {
  return (
    <div className={profileStyler.main} >
        <img className={profileStyler.image} src={profileData.avatar} />
        <h3>name: <span>{profileData.name}</span></h3>
        <h3>username: <span>{profileData.username}</span></h3>
        {profileData.location && <h3>location: <span>{profileData.location}</span></h3>}
        {profileData.bio && <h3>bio: <span>{profileData.bio}</span></h3>}
        {profileData.blog && <h3>blog: <span>{profileData.blog}</span></h3>}
        <h3><span>{profileData.following} following</span> - <span>{profileData.followers} followers</span></h3>
    </div>
  )
}

export default Profile