import { Component, OnInit } from '@angular/core';
import { IElementData } from '../../interfaces/element-data';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  elementsList: IElementData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.initializeElementsList();
  }

  initializeElementsList() {
    this.dataService.getElements()
    .subscribe(data => this.elementsList = data as IElementData[]);
  }

}
