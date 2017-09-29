import { Component, OnInit, Input } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css'],
  providers: [ClubService]
})
export class EditClubComponent implements OnInit {
  @Input() selectedClub;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  beginUpdatingClub(selectedClub){
    this.clubService.updateClub(selectedClub);
  }

}
