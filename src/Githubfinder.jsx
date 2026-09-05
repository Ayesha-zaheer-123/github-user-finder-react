import { useState } from "react"
 export default function Githubfinder() {
    let[input,setinput]=useState("");
    let[data,setdata]=useState({}); 
    let[error,seterror]=useState(false); 
    function handleChange(e) { 
        setinput(e.target.value);
     } 
     const url=`https://api.github.com/users/${input}`
      async function fetchurl(url) {
         try{ 
            let value=await fetch(url); 
            if(!value.ok) {
                 seterror(true) 
                 throw new Error("User not found!"); 
                } 
                let response=await value.json(); 
                seterror(false); 
                setdata(response)
                }catch{ 
                    seterror(true) 

                } 
            } 
            function Searchfunc() { 
                fetchurl(url)
             }
return (

        <div className="page">
            <h1>GitHub User Finder</h1>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={Searchfunc}>
                    Search
                </button>
            </div> 
            {error ?(
                    <p className="error">User not found!</p>
                ) :
 (data.login && ( <div className="main">
                        <div className="profile-header">
                            <img
                                className="avatar"
                                src={data.avatar_url}
                                alt="profile"
                            />
                            <div className="profile-info">
                                <h2>{data.name || data.login}</h2>
                                <p className="username">@{data.login}</p>
                                <p className="bio">
                                    {data.bio || "No bio available"}
                                </p>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h3>{data.followers || 0}</h3>
                                <p>Followers</p>
                            </div>
                            <div className="stat">
                                <h3>{data.following || 0}</h3>
                                <p>Following</p>
                            </div>
                            <div className="stat">
                                <h3>{data.public_repos || 0}</h3>
                                <p>Repositories</p>
                            </div>
                        </div>

                        <div className="details">
<p className="detail">
        <i className="fa-solid fa-location-dot"></i>
        {data.location || "Location not available"}
    </p>

    <p className="detail">
        <i className="fa-solid fa-envelope"></i>
        {data.email || "Email not available"}
    </p>

    <p className="detail">
        <i className="fa-brands fa-x-twitter"></i>
        {data.twitter_username || "Twitter not available"}
    </p>
    </div>
    </div>
 )
    )}
    </div>
)}