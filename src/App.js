import {useEffect, useState} from "react";

function App() {
  const CLIENT_ID = "c1a614a14eb54be3917aa805657bcb54"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {
      token = hash.substring(1).split( "&").find(elem => elem.startsWith("acess_token")).split("=")[1]

      console.log(token)
    }
  }, [])



  return (
    <div className="App">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    </div>
  );
}

export default App;
