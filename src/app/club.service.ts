import { Injectable } from '@angular/core';
import { Club } from './club.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClubService {
  clubs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.clubs = database.list('clubs');
  }

  getClubs(){
    return this.clubs;
  }

  getClubByKey(clubKey:string){
    return this.database.object('clubs/' + clubKey);
  }

  updateClub(localUpdatedClub){
    let clubEntryInFirebase = this.getClubByKey(localUpdatedClub.$key);
    clubEntryInFirebase.update({
      name: localUpdatedClub.name,
      address: localUpdatedClub.address,
      city: localUpdatedClub.city,
      number: localUpdatedClub.number,
      image: localUpdatedClub.image,
      weekendHours: localUpdatedClub.weekendHours,
      summerHours: localUpdatedClub.summerHours,
      mealsProvided: localUpdatedClub.mealsProvided,
      teenCenter: localUpdatedClub.teenCenter,
      website: localUpdatedClub.website
    })
  }

  addClub(selectedClub: Club) {
    this.clubs.push(selectedClub);
  }

  deleteClub(clubToDelete){
    var clubEntryInFirebase = this.getClubByKey(clubToDelete.$key);
    clubEntryInFirebase.remove();
  }

}
