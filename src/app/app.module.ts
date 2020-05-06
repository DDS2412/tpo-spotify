import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutesModule, routingComponents} from './app-routes.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CallbackComponent } from './components/callback/callback.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {SpotifyService} from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    CallbackComponent,
    ArtistComponent,
    AlbumComponent,
    RecommendationsComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
