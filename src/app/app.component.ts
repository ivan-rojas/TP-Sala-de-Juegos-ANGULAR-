import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status:boolean = true;

  toggleMenu() {
    this.status = !this.status;
  }

  public Logout(): void
  {
    localStorage.clear();
  }

}
