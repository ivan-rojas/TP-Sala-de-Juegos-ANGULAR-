import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonHelper } from '../../classes/helpers/common-helper';
import { AuthService } from '../../services/firebase/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public message: string;
  public isError: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.email = '';
    this.password = '';
    this.message = '';
    this.isError = true;
  }

  public Login()
  {
    if(CommonHelper.IsNotEmpty(this.email) && CommonHelper.IsNotEmpty(this.password))
    {
        this.authService.Login(this.email, this.password).then( (response) => {
          if(!response)
          {
            this.isError = true;
            this.message = "El email y/o clave es incorrecto.";
          }
          else
          {
            this.isError = false;
            this.message = "¡Bienvenido de vuelta!";
            response.password = 'Nice try!';
            localStorage.setItem('userdata', JSON.stringify(response));
            this.router.navigate(['/']);
          }
        })
        
    }
    else
    {
      this.isError = true;
      this.message = "Los campos no pueden estar vacíos.";
    }
  }


}
