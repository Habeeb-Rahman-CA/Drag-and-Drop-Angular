import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropComponent } from "./components/drag-drop/drag-drop.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragDropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drag-and-drop';
}
