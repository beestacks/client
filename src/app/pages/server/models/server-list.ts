export interface Server {
  id?: number;
  hostname: string;
  os: 'windows' | 'ubuntu' | 'redhat' | 'debian' | 'others';
  url: string;
  token?: string;
  tags?: {
    color: string;
    value: string;
  }[];
}
