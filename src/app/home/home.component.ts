import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClubService } from '../club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClubService]
})
export class HomeComponent implements OnInit {
  clubs: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private clubService: ClubService) { }

  ngOnInit() {
    this.clubs = this.clubService.getClubs();
  }

  showDetails(selectedClub){
    this.router.navigate(['club-details', selectedClub.$key]);
  }

}
