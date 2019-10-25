import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onConnexion($event, form) {
    $event.preventDefault();
    const credentials = form.value;
    console.log(credentials);

    //
  }
}
