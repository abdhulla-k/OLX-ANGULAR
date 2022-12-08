import { Component, Input, HostListener } from "@angular/core";

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {
    @Input() showStatus: boolean = false;
    crossIcon = faTimes;

    // function to close the side nav bar. It will work when clicking on the cross icon
    closeSide() {
        this.showStatus = false;
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