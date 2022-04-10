import { Component, OnInit } from '@angular/core';
import { Story, StoryMapped } from "../../shared/Models";
import { StoriesService } from "../../shared/services/stories.service";
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  mappedStories: StoryMapped[] = []

  constructor(private readonly service: StoriesService) {
  }

  /**
   * Angular lifecycle hook - component initialization
   */
  ngOnInit(): void {
    this.service.getRandomStoriesIds(10).subscribe((data) => {
      data.forEach((item: Story, index: number) => {
        this.service.getUserById(item.by).subscribe((user) => {
          Object.assign(item, { author: user, imageUrl: this.getImageUrl(index) })
        })
      })
      this.mappedStories = data;
    })
  }

  /**
   * Get image url
   * @param imageId number
   * @private
   */
  private getImageUrl(imageId: number): string {
    const baseUrl: string = "./assets/images/";
    let imageUrl: string = `${ baseUrl }img(${ imageId }).jpg`;
    return imageUrl;
  }
}
