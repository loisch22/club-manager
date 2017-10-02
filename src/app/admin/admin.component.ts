import { Component, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClubService]
})
export class AdminComponent implements OnInit {

  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  addClub(name: string, address: string, city: string, number: number, image: string, weekendHours: boolean, summerHours: boolean, mealsProvided: boolean, teenCenter: boolean, website: string){
    let newClub: Club = new Club(name, address, city, number, image, weekendHours, summerHours, mealsProvided, teenCenter, website);
    console.log(weekendHours);

    this.clubService.addNewClub(newClub);
  }


}
