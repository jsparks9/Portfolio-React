export default class GitProfile {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  bio: string;

  constructor(login: string, id: number, avatar_url: string, html_url: string, bio: string) {
    this.login = login;
    this.id = id;
    this.avatar_url = avatar_url;
    this.html_url = html_url;
    this.bio = bio;
  }
}