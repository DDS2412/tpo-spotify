import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Artist} from '../../models/artist';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLogin() {
    return this.authService.isAuthenticated();
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(data => {
        this.searchRes = data;
      });
  }
}
