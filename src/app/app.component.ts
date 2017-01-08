import { Component, trigger, state, style, transition, animate, keyframes, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("focusPanel", [
      state("inactive", style({
        transform: "scale(1)"
      })),
      state("active", style({
        transform: "scale(1.04)"
      })),
      transition('inactive => active', animate("500ms ease-in")),
      transition('active => inactive', animate("500ms ease-out"))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
}
