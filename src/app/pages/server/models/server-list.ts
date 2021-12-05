export interface Server {
  id?: string;
  hostname: string;
  os: 'windows' | 'ubuntu' | 'redhat' | 'debian' | 'others';
  url: string;
  token?: string;
  tags?: {
    color: string;
    value: string;
  }[];
}
