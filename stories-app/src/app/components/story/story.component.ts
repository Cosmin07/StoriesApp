import { Component, Input, OnInit } from '@angular/core';
import { StoryMapped } from "../../shared/Models";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor() {
  }

  @Input()
  public stories!: StoryMapped;

  ngOnInit(): void {
  }

}
