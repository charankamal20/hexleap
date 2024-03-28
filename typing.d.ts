/**
 * Represents a team card component.
 */
type TeamCardProps = {
  teamName: string; // The name of the team.
  totalEvents: number; // The total number of events.
  sport: string; // The sport of the team.
  image: StaticImport; // The image of the team.
};


type AdvertisementCard = {
  image: string | StaticImport;
  title: string;
  description: string;
};