import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mult Step Form';

  steps = signal<'step1' | 'step2' | 'step3' | 'summary'>('step1');

  form = new FormGroup({
    step1: new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    }),
    step2: new FormGroup({
      plan: new FormControl('arcade'),
      yearly: new FormControl(false),
    }),
    step3: new FormGroup({
      onlineService: new FormControl(false),
      largerStorage: new FormControl(false),
      customProfile: new FormControl(false),
    }),
  });

  nextStep() {
    this.steps.update((s) => (s === 'step1' ? 'step2' : 'step3'));
  }
}
