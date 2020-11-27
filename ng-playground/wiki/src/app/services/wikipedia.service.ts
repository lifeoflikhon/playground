import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) { }

  search(key: string): any {
    return this.httpClient.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        uft8: '1',
        srsearch: key,
        origin: '*'
      }
    });
  }
}
