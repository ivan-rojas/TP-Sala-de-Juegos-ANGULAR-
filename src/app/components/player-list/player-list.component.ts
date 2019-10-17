import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/firebase/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  public players;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.GetAllPlayers();
  }

}
