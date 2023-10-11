import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css'],
})
export class HelloworldComponent {
  @Input() name: string;
}
