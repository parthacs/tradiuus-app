import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['Suggestion', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  goBack() {
    window.history.back();
  }

  onNameInput(event: any) {
    const nameControl = this.contactForm.get('name');
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

  submitForm() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // Here you would implement API call to send the form
      console.log('Contact form submitted', this.contactForm.value);
      
      // Show success state
      this.submitted = true;
      
      // Reset form after submission
      setTimeout(() => {
        this.contactForm.reset({
          subject: 'Suggestion'
        });
        this.submitted = false;
        
        // Navigate back to previous page after success
        this.router.navigate(['/tutorial']);
      }, 2000);
    }
  }
} 