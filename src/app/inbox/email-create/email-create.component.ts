import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  public email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    from: `${this.authService.username}@angular-email.com`,
    text: '',
  };

  constructor(private authService: AuthService, private emailService: EmailService) {}

  ngOnInit(): void {}

  onSubmit(email: Email): void {
    this.emailService.sendEmail(email).subscribe((response)=>{
      this.showModal = false
    })
  }
}
