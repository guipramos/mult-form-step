import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css',
})
export class AddOnsComponent {
  next = output<void>();
}
