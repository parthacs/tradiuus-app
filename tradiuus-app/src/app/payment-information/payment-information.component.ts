import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface CardInfo {
  id: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cardType: string;
  isDefault: boolean;
}

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class PaymentInformationComponent implements OnInit {
  paymentForm: FormGroup;
  cards: CardInfo[] = [];
  isAddingNewCard = false;
  editingCardId: string | null = null;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardName: ['', [Validators.required, Validators.minLength(3)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  ngOnInit() {
    // Load saved cards from service/storage
    this.loadSavedCards();
  }

  loadSavedCards() {
    // Mock data - replace with actual service call
    this.cards = [
      {
        id: '1',
        cardNumber: '**** **** **** 1234',
        cardName: 'John Doe',
        expiryDate: '12/25',
        cardType: 'visa',
        isDefault: true
      }
    ];
  }

  formatCardNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    this.paymentForm.patchValue({ cardNumber: formattedValue });
  }

  formatExpiryDate(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    this.paymentForm.patchValue({ expiryDate: value });
  }

  detectCardType(cardNumber: string): string {
    if (cardNumber.startsWith('4')) return 'visa';
    if (cardNumber.startsWith('5')) return 'mastercard';
    if (cardNumber.startsWith('3')) return 'amex';
    return '';
  }

  addNewCard() {
    this.isAddingNewCard = true;
    this.editingCardId = null;
    this.paymentForm.reset();
  }

  editCard(card: CardInfo) {
    this.isAddingNewCard = true;
    this.editingCardId = card.id;
    // Populate form with card details
    this.paymentForm.patchValue({
      cardNumber: card.cardNumber,
      cardName: card.cardName,
      expiryDate: card.expiryDate
    });
  }

  deleteCard(cardId: string) {
    // Show confirmation dialog
    if (confirm('Are you sure you want to delete this card?')) {
      this.cards = this.cards.filter(card => card.id !== cardId);
      // Call service to delete card
    }
  }

  setDefaultCard(cardId: string) {
    this.cards = this.cards.map(card => ({
      ...card,
      isDefault: card.id === cardId
    }));
    // Call service to update default card
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const formValue = this.paymentForm.value;
      const cardType = this.detectCardType(formValue.cardNumber.replace(/\s/g, ''));

      if (this.editingCardId) {
        // Update existing card
        this.cards = this.cards.map(card => 
          card.id === this.editingCardId 
            ? { ...card, ...formValue, cardType }
            : card
        );
      } else {
        // Add new card
        const newCard: CardInfo = {
          id: Date.now().toString(),
          cardNumber: `**** **** **** ${formValue.cardNumber.slice(-4)}`,
          cardName: formValue.cardName,
          expiryDate: formValue.expiryDate,
          cardType,
          isDefault: this.cards.length === 0
        };
        this.cards.push(newCard);
      }

      this.isAddingNewCard = false;
      this.editingCardId = null;
      this.paymentForm.reset();
    }
  }

  cancel() {
    this.isAddingNewCard = false;
    this.editingCardId = null;
    this.paymentForm.reset();
  }
} 