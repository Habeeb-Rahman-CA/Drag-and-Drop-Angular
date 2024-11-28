import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DraggedItem } from '../../interface/dragged-item';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.css'
})
export class DragDropComponent {

  boxes = [
    { items: ['item 1', 'item 2'] },
    { items: ['item 3', 'item 4', 'item 5'] },
  ]

  draggedItem: DraggedItem | null = null
  placeholderBoxIndex: number | null = null

  onDragStart(item: string, sourceBoxIndex: number) {
    this.draggedItem = { item, sourceBoxIndex }
  }

  onDragOver(event: DragEvent, targetBoxIndex: number) {
    event.preventDefault()
    if (this.draggedItem && this.draggedItem.sourceBoxIndex !== targetBoxIndex) {
      this.placeholderBoxIndex = targetBoxIndex
    }
  }

  clearPlaceholder() {
    this.placeholderBoxIndex = null
  }

  onDrop(event: DragEvent, targetBoxIndex: number) {
    event.preventDefault()
    if (this.draggedItem) {
      const { item, sourceBoxIndex } = this.draggedItem
      if (sourceBoxIndex !== targetBoxIndex) {
        this.boxes[sourceBoxIndex].items = this.boxes[sourceBoxIndex].items.filter(i => i !== item)
        this.boxes[targetBoxIndex].items.push(item)
      }
    }
    this.draggedItem = null
    this.placeholderBoxIndex = null
  }

}
