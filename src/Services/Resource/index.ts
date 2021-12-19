import axios from '../index';

export class ResourceService {
  static getDataGithub(language: string, since: string | number) {
    return axios.get(`/data/github/${language}/${since}.json`);
  }

  static getDataDevTo(tag: string) {
    return axios.get(`/devto/articles?state=rising&per_page=30&tag=${tag}`);
  }

  static getDataHackerNew() {
    return axios.get('/data/hackernews.json');
  }
}
