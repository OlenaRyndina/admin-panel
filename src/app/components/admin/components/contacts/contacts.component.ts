import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  

  personalList!: Observable<User[]>;

  constructor(
        private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users']));

  }

}




























