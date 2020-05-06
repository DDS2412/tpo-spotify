import { Component, OnInit } from '@angular/core';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../../models/track';
import {Playlist} from '../../models/playlist';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album;
  playlists: Playlist[];
  selectedTrack: Track;
  display: string;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.spotifyService
          .getAlbum(this.id)
          .subscribe(album => {
            this.album = album;
            console.log(album);
          });
      }
    });
  }

  addTrackToPlaylist(playlistId: string){
    this.spotifyService
      .addFromPlaylist(playlistId, this.selectedTrack.uri)
      .subscribe(() => {
        this.spotifyService.getPlaylists().subscribe(playlists => {
          this.playlists = playlists;
        });
      });
  }

  openModalDialog(selectedTrack: Track){
    this.display = 'show';
    this.selectedTrack = selectedTrack;
    this.spotifyService.getPlaylists().subscribe(playlists => {
      this.playlists = playlists;
    });
  }

  closeModalDialog(){
    this.display = '';
    this.selectedTrack = null;
    this.playlists = null;
  }
}
