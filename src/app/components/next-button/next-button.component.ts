import { Component, output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css'],
})
export class NextButtonComponent {
  clicked = output<void>();
}
