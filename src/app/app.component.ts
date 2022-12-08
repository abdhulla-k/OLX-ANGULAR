import { Component } from '@angular/core';

import { ToggleMenueService } from './toggle-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'olx';

  constructor(private toggleService: ToggleMenueService) { }

  toggeleMenue() {
    this.toggleService.toggleMenueStatus = !this.toggleService.toggleMenueStatus;
    this.toggleService.toggleChange();
    console.log(this.toggleService.toggleMenueStatus);
  }
}
