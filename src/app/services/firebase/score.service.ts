import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Score } from '../../models/score';
import { CommonHelper } from '../../classes/helpers/common-helper';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private db: AngularFirestore) { }

  public GetAll()
  {
    return this.db.collection('scores').valueChanges();
  }

  public Add(score: Score): void
  {
    score.jugador = this.GetUsername();
    this.db.collection('scores').add(CommonHelper.ConvertToObject(score));
  }

  public GetUsername(): string
	{
		if(localStorage.getItem('userdata') != undefined)
		{
      let data = JSON.parse(localStorage.getItem('userdata'));
			return data.email;
		}
		else
			return 'Anonimo';
	}

}
