import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import {ClubService} from '../club.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css'],
  providers: [ClubService]
})
export class ClubDetailsComponent implements OnInit {
  selectedClub;
  selectedClubKey;

  constructor(private clubService: ClubService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.selectedClubKey = urlParameters['key'];
    });

    this.selectedClub = this.clubService.getClubByKey(this.selectedClubKey);
  }

}
