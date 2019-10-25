import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onConnexion($event, form) {
    $event.preventDefault();
    const credentials = form.value;

    // envoyer à un service qui va appeler notre projet node
    this.authService.login(credentials).subscribe(result => {
      if (result) {
        this.router.navigate(['/admin/home']);
      }
    });
  }
}
