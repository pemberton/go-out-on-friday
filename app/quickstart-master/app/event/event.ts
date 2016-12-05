import { Timetable } from './timetable';

export class Event {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  pathToMap: string;
  address: string;
  siteAddress: string;
  timetable: Timetable;
  imagePathes: string[]
}