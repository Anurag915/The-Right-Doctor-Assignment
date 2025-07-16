import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
//   styleUrls: ['./person-delete.component.css'] // Add this file if needed
})
export class PersonDeleteComponent implements OnInit {
  person: Person | null = null;
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;
  personId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personId = this.route.snapshot.paramMap.get('id');
    if (this.personId) {
      this.personService.getPerson(this.personId).subscribe(
        data => {
          this.person = data;
          this.message = null;
        },
        error => {
          console.error('Error fetching person for deletion:', error);
          this.setMessage('Failed to load person data for deletion. Please try again.', 'error');
        }
      );
    } else {
      this.setMessage('No person ID provided for deletion.', 'error');
    }
  }

  confirmDelete(): void {
    if (this.personId) {
      this.personService.deletePerson(this.personId).subscribe(
        () => {
          this.setMessage('Person deleted successfully!', 'success');
          setTimeout(() => this.router.navigate(['/people']), 1500);
        },
        error => {
          console.error('Error deleting person:', error);
          this.setMessage('Failed to delete person. Please try again.', 'error');
        }
      );
    }
  }

  cancelDelete(): void {
    this.router.navigate(['/people']);
  }

  setMessage(msg: string, type: 'success' | 'error'): void {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => {
      this.message = null;
      this.messageType = null;
    }, 3000);
  }
}