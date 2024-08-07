import React, { useEffect } from 'react'

const Assignment5 = () => {
    const [profileData, setProfileData] = React.useState({})

    const fetchProfile = async () => {
        const response = await fetch('https://api.github.com/users/karankhatik')
        const data = await response.json()
        console.log(data)
        setProfileData(data)
    }
    useEffect(() => {
       fetchProfile();
    }, [])          
  return (
    <div>
        <h1>Profile</h1>
        <p>name: {profileData.name}</p>
        <p>company: {profileData.company}</p>
        <p>location: {profileData.location}</p>
        <p>bio: {profileData.bio}</p>
        <p>twitter: {profileData.twitter_username}</p>
        <p>followers: {profileData.followers}</p>
        <p>following: {profileData.following}</p>                                   
    </div>
  )
}

export default Assignment5