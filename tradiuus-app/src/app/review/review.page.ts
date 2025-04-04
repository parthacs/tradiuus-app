import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
  standalone: false
})
export class ReviewPage implements OnInit {
  contractor = {
    company: 'Prestige Plumbing',
    jobId: '12356896',
    description: 'Plumber for water leak',
    phone: '(505)569-8521',
    price: '$300',
    rating: 4,
    bookedDate: '12 Dec 24 at 3:35 PM',
    workStatus: ''
  };
  
  ratings = {
    overall: 1,
    price: 1,
    quality: 1,
    timeliness: 1,
    professionalism: 1
  };
  
  feedback = '';

  constructor() { }

  ngOnInit() {
  }
  
  rateCategory(category: string, rating: number) {
    this.ratings[category as keyof typeof this.ratings] = rating;
  }
  
  submitReview() {
    console.log('Review submitted:', {
      ratings: this.ratings,
      feedback: this.feedback
    });
    // Here you would add the API call to submit the review
  }
}
