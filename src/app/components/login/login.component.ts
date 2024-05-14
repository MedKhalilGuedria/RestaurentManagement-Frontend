import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('overlayAnimation', [
      state('signIn', style({
        transform: 'translateX(-50%)'
      })),
      state('signUp', style({
        transform: 'translateX(50%)'
      })),
      transition('signIn => signUp', animate('600ms ease-in-out')),
      transition('signUp => signIn', animate('600ms ease-in-out'))
    ])
  ]
})

export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  

  

}
