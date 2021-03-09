// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"

//Redirect user here after authorization is done by Spotify API
const redirectUri = "http://localhost:3000/"

//A unique 62 digit code taken from Spotify API Dashboard
// DO NOT SHARE THIS.
const clientId = "1cbc8055589943a1ad39e15624add39c"

//Allows us to define scope where the app can work.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]

// String interpolation to generate login URL.
// .join() joins array elements with %20, which is ASCII for space.
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`