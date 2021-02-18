import { Component, VERSION as AngularVersion } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';
import { VERSION as MaterialVersion } from '@angular/material';

@Component({
  selector: 'solution-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngVersion: string = AngularVersion.full;
  matVersion: string = MaterialVersion.full;
  isDarkThemeActive: boolean;

  constructor(private readonly _sharedDataService: SharedDataService) {
    this._sharedDataService.OnThemeSwitch.subscribe(value => this.isDarkThemeActive = value);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

} // End of class:AppComponent 