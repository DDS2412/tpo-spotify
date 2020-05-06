import {Images} from './images';
import {Artist} from './artist';
import {TracksExtraInfo} from './tracksExtraInfo';

export class Album {
  id: number;
  name: string;
  images: Images[];
  artists: Artist[];
  tracks: TracksExtraInfo;
  releaseDate: Date;
}
