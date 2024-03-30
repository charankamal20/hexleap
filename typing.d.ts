/**
import CollectionCard from './components/CollectionCard';
 * Represents a team card component.
 */
type TeamCardProps = {
  teamName: string; // The name of the team.
  totalEvents: number; // The total number of events.
  sport: string; // The sport of the team.
  image: StaticImport; // The image of the team.
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

type AdvertisementCard = {
  image: string | StaticImport;
  title: string;
  description: string;
};

type CollectionCard = {
  team_name: string;
  date: number;
  image: string | StaticImport;
  month: string;
  time: string;
  day: string;
  location: string;
  action: string;
}