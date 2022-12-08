import { Component, EventEmitter, Output } from "@angular/core";

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header-component.html',
    styleUrls: ['./header-component.css']
})
export class HeaderComponent {
    faCoffee = faBars;
    @Output() toggleMenue = new EventEmitter()

    // function to work when clicking on humberger menue
    showMenue() {
        this.toggleMenue.emit();
    }
}