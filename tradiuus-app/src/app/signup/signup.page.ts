import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false
})
export class SignupPage implements OnInit {
  userType: string = 'customer';
  signupForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  async signup() {
    if (this.signupForm.valid) {
      // Here you would implement the API call to register the user
      console.log('Form submitted', {
        userType: this.userType,
        ...this.signupForm.value
      });
      
      // Navigate to login page after successful signup
      this.router.navigate(['/login']);
    } else {
      this.markFormGroupTouched(this.signupForm);
      const toast = await this.toastController.create({
        message: 'Please fill all required fields correctly',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      toast.present();
    }
  }

  // Helper method to mark all controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // New method to handle name capitalization
  onNameInput(event: any) {
    const nameControl = this.signupForm.get('name');
    if (!nameControl || !nameControl.value) return;
    
    // Convert the input to title case (capitalize first letter of each word)
    const titleCaseName = this.toTitleCase(nameControl.value);
    
    // Only update if changed to avoid cursor position issues
    if (titleCaseName !== nameControl.value) {
      nameControl.setValue(titleCaseName, { emitEvent: false });
    }
  }

  // Helper function to convert string to title case
  toTitleCase(str: string): string {
    // Split by spaces, then capitalize first letter of each word
    return str.replace(/\w\S*/g, (text) => {
      return text.charAt(0).toUpperCase() + text.substring(1);
    });
  }
}
