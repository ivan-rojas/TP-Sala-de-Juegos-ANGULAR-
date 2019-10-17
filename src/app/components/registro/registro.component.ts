import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import { Player } from '../../models/player';
import { CommonHelper } from '../../classes/helpers/common-helper';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public email: string;
  public password: string;
  public repeatePassword: string;
  public message: string;
  public isError: boolean;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.email = '';
    this.password = '';
    this.repeatePassword = '';
    this.message = '';
    this.isError = true;
  }

  public Register()
  {
    if(CommonHelper.IsNotEmpty(this.email) && CommonHelper.IsNotEmpty(this.password) && CommonHelper.IsNotEmpty(this.repeatePassword))
    {
      if(this.ComparePasswords())
      {
        this.isError = false;
        this.message = "Te has registrado con éxito!";
        let player = new Player(this.email, this.password);
        this.authService.Register(player);
      }
      else
      {
        this.isError = true;
        this.message = "Las claves no coinciden.";
      }
    }
    else
    {
      this.isError = true;
      this.message = "Los campos no pueden estar vacíos.";
    }
  }

  private ComparePasswords(): boolean
  {
    if(this.password === this.repeatePassword)
      return true;
    else
      return false;
  }

}