function loginRedirect() {
  const CLIENT_ID = '775f56b73b404b8e965cab76746145f2';
  const CLIENT_SECRET = '0d9171d31da14b21a2c4d34493a939f8';

  window.location = "https://accounts.spotify.com/en/authorize?client_id=" +
    CLIENT_ID + "&response_type=token&redirect_uri=" +
    "http://localhost:8888/callback" +
    "&scope=playlist-read-private%20user-read-private%20user-top-read%20playlist-modify-public"
}


