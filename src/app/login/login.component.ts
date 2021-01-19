import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user']
    });
  }

  onSubmit() {
    const rawValues = this.loginForm.getRawValue()
    const role = rawValues.role;
    localStorage.setItem('role',role);
    if(role === 'admin'){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/home/about']);
    }
  }
}
