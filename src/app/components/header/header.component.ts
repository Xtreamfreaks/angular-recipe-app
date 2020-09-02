import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() navigateFeature = new EventEmitter<string>();

    selectedFeature(feature: string) {
        this.navigateFeature.emit(feature);
    }

}