import {Images} from './images';
import {Track} from './track';
import {Person} from './person';
import {TracksExtraInfo} from './tracksExtraInfo';

export class Playlist {
  id: string;
  images: Images[];
  uri: string;
  name: string;
  tracks: TracksExtraInfo;
  owner: Person;
}
