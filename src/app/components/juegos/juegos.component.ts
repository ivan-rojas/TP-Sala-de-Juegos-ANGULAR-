import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(!this.authService.IsAuth())
      this.router.navigate(['/login']);
  }

}
