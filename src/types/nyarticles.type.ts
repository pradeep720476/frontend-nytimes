export interface Articles {
  num_results: number;
  results: Article[];
}

export interface Article {
  uri: string;
  url: string;
  id: string;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  type: string;
  byline: string;
  title: string;
  abstract: string;
  media: Media[];
}

export interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetaData[];
}

export interface MediaMetaData {
  url: string;
  format: string;
  height: number;
  width: number;
}
