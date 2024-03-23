import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { usernameOrEmail, password } = this.loginForm.value;
      this.userService.login(usernameOrEmail, password).subscribe((loggedIn) => {
        if (loggedIn) {
          console.log('Logged in successfully.');
          alert("Logged in successfully...")
        } else {
          console.log('Invalid credentials.');
        }
      });
    }
  }
}

