import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ToggleMenueService {
    toggleMenueStatus: boolean = false;
    toggleEmit = new EventEmitter();

    toggleChange() {
        this.toggleEmit.emit();
    }
}