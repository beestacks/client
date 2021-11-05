export interface Server {
  ip: string;
  hostname: string;
  port: number;
  https: boolean;
  os: 'windows' | 'ubuntu' | 'red hat' | 'debian' | 'others';
  domain?: string;
  token?: string;
  tags?: string[];
}
