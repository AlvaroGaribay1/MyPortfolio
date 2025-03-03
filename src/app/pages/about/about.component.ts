import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
 import emailjs from "emailjs-com";
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
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
  ],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement;

    if (form) {
      form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        emailjs
          .sendForm(
            'service_z9qome8',
            'template_m9pqcs7',
            form,
            'U2cWyzOhBkOzX0PdJ'
          )
          .then(() => {
            Swal.fire({
              title: 'Done!',
              text: 'Message sent!',
              icon: 'success',
              timer: 1500,
            });
            form.reset();
          })
          .catch((error) =>
            Swal.fire({
              title: 'Bad news!',
              text: 'Message not sent!',
              icon: 'error',
              timer: 1500,
            })
          );
      });
    }
  }


}
