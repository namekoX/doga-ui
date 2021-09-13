
type GetIndexDataRes = {
  status: number;
  data: Item[];
}

export type Item = {
  kind: 'niconico' | 'youtube';
  id: string;
  publishTime: string;
  channelTitle: string;
  liveBroadcastContent: string;
  description: string;
  thumbnail: string;
  title: string;
  channelId: string;
}

export default GetIndexDataRes;