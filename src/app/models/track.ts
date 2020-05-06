import {Artist} from './artist';

export class Track {
  id: string;
  name: string;
  uri: string;
  artists: Artist[];
  trackNumber: number;
  previewUrl: string;
}
