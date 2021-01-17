import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>🔥 𝐇𝐞𝐲 𝐂𝐡𝐚𝐦𝐩 🔥</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class WelcomeComponent  {
  @Input() name: string;
}