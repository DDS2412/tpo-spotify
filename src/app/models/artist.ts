import {Album} from './album';
import {Images} from './images';

export class Artist {
  id: number;
  name: string;
  genres: any;
  images: Images[];
  albums: Album[];
}
