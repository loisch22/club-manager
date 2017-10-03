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
  clubToAdd: Club;
  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  addClub(name: string, address: string, city: string, number: number, image: string, weekendHours: boolean, summerHours: boolean, mealsProvided: boolean, teenCenter: boolean, website: string){
    let newClub: Club = new Club(name, address, city, number, image, weekendHours, summerHours, mealsProvided, teenCenter, website);
    this.clubToAdd = newClub;
    // let newClub: Club = new Club("name", "address", "city", 2, "image", true, true, true, true, "website");
    // newClub.name = "Walter";
    //
    console.log(this.clubToAdd);

    this.clubService.addNewClub(this.clubToAdd);
  }

}
