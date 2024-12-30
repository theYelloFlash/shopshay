import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Store } from '@ngrx/store';
import { login } from '../../ngRx/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  isPasswordHidden = true;
  emailCtrl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordCtrl: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder, private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
    private loader: NgxUiLoaderService,
    private store: Store
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onLoginSuccess() {
    // Simulate successful login and dispatch login action
    this.store.dispatch(login());
  }


  submitLoginForm() {
    this.loader.start()
    const loginCredentials = {
      email: this.emailCtrl.value,
      password: this.passwordCtrl.value
    }
    this.apiService.loginApi(loginCredentials).subscribe({
      next: (res) => {
        this.loader.stop()
        localStorage.setItem('token', res.token)
        this.toastr.success('Login Successfully');
        this.onLoginSuccess();
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        if (err.error.statusCode == 401) {
          this.loader.stop()
          this.toastr.error(err.error.message)
        }
      }
    })
  }

}
