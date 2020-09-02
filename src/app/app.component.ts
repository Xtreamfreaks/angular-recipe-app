import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-udemy';
  displayedFeature:string = 'recipe';


  displayFeature(feature: string) {
    this.displayedFeature = feature;
  }
}
