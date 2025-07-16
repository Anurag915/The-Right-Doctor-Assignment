import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' }, // Default route
  { path: 'people', component: PeopleListComponent },
  { path: 'person/new', component: PersonEditComponent }, // Route for creating a new person
  { path: 'person/edit/:id', component: PersonEditComponent }, // Route for editing an existing person
  { path: 'person/delete/:id', component: PersonDeleteComponent }, // Route for deleting a person
  { path: '**', redirectTo: '/people' } // Wildcard route for any other path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }