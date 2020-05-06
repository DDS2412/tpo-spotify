import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AuthGuard} from './auth.guard';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {RecommendationsComponent} from './components/recommendations/recommendations.component';
import {PlaylistsComponent} from './components/playlists/playlists.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'recommendations', component: RecommendationsComponent, canActivate: [AuthGuard]},
  {path: 'playlists', component: PlaylistsComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: 'artist/:id', component: ArtistComponent, canActivate: [AuthGuard]},
  {path: 'album/:id', component: AlbumComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
export const routingComponents = [MainpageComponent, RecommendationsComponent, CallbackComponent, ArtistComponent, AlbumComponent];
