import { Component } from '@angular/core';
import { ProjectCardsComponent } from "../../components/project-cards/project-cards.component";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
      trigger('slideIn', [
        state(
          'void',
          style({
            opacity: 0,
            transform: 'translateX(-50px)',
          })
        ),
        transition(':enter', [
          animate(
            '0.7s ease-out',
            keyframes([
              style({ opacity: 0, transform: 'translateX(-50px)', offset: 0 }),
              style({
                opacity: 0.5,
                transform: 'translateX(-20px)',
                offset: 0.5,
              }),
              style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
            ])
          ),
        ]),
      ]),
    ]
})
export class ProjectsComponent {

}
