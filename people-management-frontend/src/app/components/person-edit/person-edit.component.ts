import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
//   styleUrls: ['./person-edit.component.css'] // Add this file if needed
})
export class PersonEditComponent implements OnInit {
  person: Person = { name: '', age: null, gender: '', mobile: '' };
  isEditMode: boolean = false;
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.personService.getPerson(id).subscribe(
        data => {
          this.person = data;
          this.message = null;
        },
        error => {
          console.error('Error fetching person for edit:', error);
          this.setMessage('Failed to load person data. Please try again.', 'error');
        }
      );
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.personService.updatePerson(this.person._id!, this.person).subscribe(
        () => {
          this.setMessage('Person updated successfully!', 'success');
          setTimeout(() => this.router.navigate(['/people']), 1500);
        },
        error => {
          console.error('Error updating person:', error);
          this.setMessage('Failed to update person. Please try again.', 'error');
        }
      );
    } else {
      this.personService.createPerson(this.person).subscribe(
        () => {
          this.setMessage('Person created successfully!', 'success');
          setTimeout(() => this.router.navigate(['/people']), 1500);
        },
        error => {
          console.error('Error creating person:', error);
          this.setMessage('Failed to create person. Please try again.', 'error');
        }
      );
    }
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