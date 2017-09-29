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

  getClubByKey(clubKey:string)
  {
    return this.database.object('clubs/' + clubKey);
  }
}
