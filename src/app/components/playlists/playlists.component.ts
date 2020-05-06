import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Playlist} from '../../models/playlist';
import {Track} from '../../models/track';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];
  selectedPlaylist: Playlist;
  tracksFromSelectedPlaylist: Track[];
  display: string;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.display = '';

    this.spotifyService.getPlaylists().subscribe(playlists => {
      this.playlists = playlists;
      });
  }

  removeTrack(trackId){
    this.spotifyService
      .removeTrackFromPlaylist(this.selectedPlaylist.id, trackId)
      .subscribe(() => {
        this.spotifyService
          .getTracksFromPlaylist(this.selectedPlaylist.id)
          .subscribe(tracks => {
            this.tracksFromSelectedPlaylist = tracks;
          });

        this.spotifyService.getPlaylists().subscribe(playlists => {
          this.playlists = playlists;
        });
      });
  }

  openModalDialog(selectedPlaylist: Playlist){
    this.display = 'show';
    this.selectedPlaylist = selectedPlaylist;
    this.spotifyService
      .getTracksFromPlaylist(this.selectedPlaylist.id)
      .subscribe(tracks => {
        this.tracksFromSelectedPlaylist = tracks;
      });
  }

  closeModalDialog(){
    this.display = '';
    this.selectedPlaylist = null;
    this.tracksFromSelectedPlaylist = null;
  }
}
