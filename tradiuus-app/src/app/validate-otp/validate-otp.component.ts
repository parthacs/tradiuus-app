import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Subscription, interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class ValidateOtpComponent implements OnInit, OnDestroy {
  otpForm: FormGroup;
  timeLeft = 60; // Example: 60 seconds timer
  timerSubscription: Subscription | null = null;
  isExpired = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  // Assuming token might be passed via query params or state
  // token: string | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute if needed
  ) {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]] // Assuming a 6-digit OTP
    });
  }

  ngOnInit() {
    // Example: Get token if passed via route state or query params
    // this.token = history.state.token || this.route.snapshot.queryParamMap.get('token');
    // if (!this.token) { 
    //   this.errorMessage = 'Invalid or missing validation token.';
    //   this.isExpired = true; 
    // }
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.isExpired = false;
    this.timeLeft = 60; // Reset timer
    this.timerSubscription?.unsubscribe(); // Unsubscribe previous timer if any

    const source = timer(0, 1000); // Start immediately, tick every second
    this.timerSubscription = source.pipe(take(this.timeLeft + 1)).subscribe(val => {
      this.timeLeft = 60 - val;
      if (this.timeLeft <= 0) {
        this.isExpired = true;
        this.errorMessage = 'The OTP/Link has expired. Please request a new one.';
        this.otpForm.disable();
      }
    });
  }

  validateOtp() {
    if (this.otpForm.invalid || this.isExpired) {
      return;
    }
    this.errorMessage = null;
    this.successMessage = null;

    const otp = this.otpForm.value.otp;
    console.log('Validating OTP:', otp);

    // --- Placeholder for actual OTP validation logic --- 
    // Replace this with your actual API call to validate the OTP
    // Example validation:
    if (otp === '123456') { // Replace with actual validation
      this.successMessage = 'OTP verified successfully!';
      // Navigate to the change password screen on success
      this.router.navigate(['/change-password']); 
    } else {
      this.errorMessage = 'Invalid OTP. Please try again.';
    }
    // --- End Placeholder --- 
  }
} 