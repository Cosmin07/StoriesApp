import { Injectable } from '@angular/core';
import { forkJoin, mergeMap, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Story, User } from "../Models";

const baseUrl: string = 'https://hacker-news.firebaseio.com/v0/'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get some random ids
   * @param amount number Amount of number returned
   */
  public getRandomStoriesIds(amount: number): Observable<any> {
    return this.http.get<any>(`${ baseUrl }topstories.json `).pipe(mergeMap((ids) => forkJoin(
      ids.sort(() => Math.random() - Math.random()).slice(0, amount).map((id: number) => this.getStoryById(id)))))
  }

  /**
   * Gets the story by id.
   * @param id
   * @private
   */
  private getStoryById(id: number): Observable<Story> {
    return this.http.get<Story>(`${ baseUrl }item/${ id }.json`)
  }

  /**
   * * Gets the user by id.
   * @param id
   */
  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${ baseUrl }user/${ id }.json`)
  }

}
