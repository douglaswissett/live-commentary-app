export default interface ApiData {
  live_commentary: Commentary[];
  highlights: Highlight[];
}

interface Commentary {
  id: string;
  key: string;
  time: string;
  title: string;
  description: string;
}

interface Highlight {
  id: string;
  commentary_id: string;
  time: string;
  title: string;
}
