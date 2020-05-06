export class TrackManipulationDto {
  playlistId: string;
  uri: string;

  constructor(playlistId: string, uri: string) {
    this.playlistId = playlistId;
    this.uri = uri;
  }
}
