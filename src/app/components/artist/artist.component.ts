import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  albums: Album[];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
          if (params['id']) {
            this.id = params['id'];
            this.spotifyService
              .getArtist(this.id)
              .subscribe(artist => {
                this.artist = artist;
              });

            this.spotifyService
              .getAlbums(this.id)
              .subscribe(albums => {
                this.albums = albums;
                console.log(albums);
              });
          }
      });
  }

}
