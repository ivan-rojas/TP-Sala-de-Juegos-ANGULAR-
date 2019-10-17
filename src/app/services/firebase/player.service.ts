import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private db: AngularFirestore) { }

  public GetAllPlayers()
  {
    return this.db.collection('players').valueChanges();
  }
}
