import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CopenhagenVolunteers';

  player: YT.Player;
  private id: string = 'qr25Qyt7V0s';

 
  
}
