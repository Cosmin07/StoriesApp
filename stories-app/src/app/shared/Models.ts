export interface Story {
  id: number,
  deleted?: boolean,
  type?: string,
  by: string,
  time?: Date,
  text?: string,
  dead?: boolean
  parent?: string,
  poll?: number,
  kids?: Array<number>,
  url?: string,
  score?: number,
  title?: string,
  parts?: Array<number>,
  descendants?: number
}

export interface User {
  id: string,
  created: Date,
  karma: number,
  about?: string,
  submitted?: Array<number>
}

export interface StoryMapped {
  title?: string,
  url?: string,
  time?: Date,
  score?: number,
  author: User,
  imageUrl?: string,

}
