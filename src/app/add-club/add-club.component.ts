import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css'],
  providers: [ClubService]
})
export class AddClubComponent implements OnInit {
  newClubToAdd: Club;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  addClub(name: string, address: string, city: string, number: number, image: string, weekendHours: boolean, summerHours: boolean, mealsProvided: boolean, teenCenter: boolean, website: string){
    let newClub: Club = new Club(name, address, city, number, image, weekendHours, summerHours, mealsProvided, teenCenter, website);

    this.clubService.addClub(newClub);
  }

}
