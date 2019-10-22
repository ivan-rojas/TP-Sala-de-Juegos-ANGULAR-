import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { CommonHelper } from '../../classes/helpers/common-helper';
import { Player } from '../../models/player';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private db: AngularFirestore) { }

	public Register(player: Player): void
	{
		this.db.collection('players').add(CommonHelper.ConvertToObject(player));
	}

	public Login(email: string, password: string)
	{
		let docRef = this.db.collection('players', ref => ref
			.where('email', '==', email)
			.where('password', '==', password));

		return docRef.get().toPromise().then(doc => {
			if(doc.docs[0] != undefined)
				return doc.docs[0].data();
			else
				return undefined;
		});
	}

	public IsAuth(): boolean
	{
		if(localStorage.getItem('userdata') != undefined)
			return true;
		else
			return false;
	}
	

}
