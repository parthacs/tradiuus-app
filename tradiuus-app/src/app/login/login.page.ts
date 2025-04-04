import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  userType: string = 'customer';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // Initialize form
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      try {
        // Simulate login success
        const toast = await this.toastController.create({
          message: 'Login successful',
          duration: 2000,
          position: 'bottom'
        });
        await toast.present();
        
        // Navigate after toast
        setTimeout(() => {
          this.router.navigate(['/review']);
        }, 2000);
      } catch (error) {
        console.error('Login error:', error);
      }
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  // Helper to mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      control.markAsTouched();
    });
  }

  forgotPassword() {
    console.log('Forgot password clicked');
  }

  signUp() {
    console.log('Sign up clicked');
  }
}
