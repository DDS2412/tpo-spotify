import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';
import {Artist} from '../models/artist';
import {Album} from '../models/album';
import {Track} from '../models/track';
import {Playlist} from '../models/playlist';
import {TrackManipulationDto} from '../models/trackManipulationDto.';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getOptions() {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': this.authService.getAccessToken(),
      })
    };
  }

  searchMusic(query: string, type = 'artist'){
    return this.httpClient
      .get<Artist[]>('http://localhost:8080/spotify/search?query=' + query + '&offset=0&limit=10&type=' + type, this.getOptions());
  }

  getArtist(id: string){
    return this.httpClient.get<Artist>('http://localhost:8080/spotify/artists?id=' + id, this.getOptions());
  }

  getAlbums(artistId: string){
    return this.httpClient.get<Album[]>('http://localhost:8080/spotify/albums?artist_id=' + artistId, this.getOptions());
  }

  getAlbum(id: string){
    return this.httpClient.get<Album>('http://localhost:8080/spotify/albums/one?id=' + id, this.getOptions());
  }

  getRecommendations(type: string = 'artists'){
    return this.httpClient.get<Track[]>('http://localhost:8080/spotify/recommendations?limit=10&type=' + type, this.getOptions());
  }

  getPlaylists(){
    return this.httpClient.get<Playlist[]>('http://localhost:8080/spotify/playlists', this.getOptions());
  }

  getTracksFromPlaylist(playlistId: string){
    return this.httpClient.get<Track[]>('http://localhost:8080/spotify/playlists/tracks?playlist_id=' + playlistId, this.getOptions());
  }

  removeTrackFromPlaylist(playlistId: string, uri: string){
    const body = new TrackManipulationDto(playlistId, uri);
    return  this.httpClient.post('http://localhost:8080/spotify/playlists/remove', body, this.getOptions());
  }

  addFromPlaylist(playlistId: string, uri: string){
    const body = new TrackManipulationDto(playlistId, uri);
    return  this.httpClient.post('http://localhost:8080/spotify/playlists/add', body, this.getOptions());
  }
}
