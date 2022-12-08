import { Component, Input, HostListener, OnInit } from "@angular/core";

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToggleMenueService } from "../toggle-button.service";


@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
    showStatus: boolean = false;
    crossIcon = faTimes;

    constructor(private toggleService: ToggleMenueService) { }

    // function to close the side nav bar. It will work when clicking on the cross icon
    closeSide() {
        this.showStatus = false;
        this.toggleService.toggleMenueStatus = false
    }

    ngOnInit(): void {
        this.toggleService.toggleEmit.subscribe(() => {
            this.showStatus = !this.showStatus;
        })
    }

    // use host listener to track the size changing of screen.
    // not only this usage
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (window.innerWidth > 992) {
            this.showStatus = false;
        }
    }
}