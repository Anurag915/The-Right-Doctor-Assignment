import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
//   styleUrls: ['./people-list.component.css'] // Add this file if needed
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  message: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe(
      data => {
        this.people = data;
        this.message = null; // Clear message on successful load
      },
      error => {
        console.error('Error loading people:', error);
        this.setMessage('Failed to load people. Please try again.', 'error');
      }
    );
  }

  setMessage(msg: string, type: 'success' | 'error'): void {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => {
      this.message = null;
      this.messageType = null;
    }, 3000); // Message disappears after 3 seconds
  }
}