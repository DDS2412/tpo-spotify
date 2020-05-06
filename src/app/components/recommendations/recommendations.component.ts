import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../../models/track';
import {Playlist} from '../../models/playlist';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  tracks: Track[];
  playlists: Playlist[];
  selectedTrack: Track;
  display: string;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spotifyService.getRecommendations().subscribe(recommendations => {
      this.tracks = recommendations;
    });
  }

  refresh(type: string){
    this.spotifyService.getRecommendations(type).subscribe(recommendations => {
      this.tracks = recommendations;
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
