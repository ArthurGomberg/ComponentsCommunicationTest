import { Component, OnInit } from '@angular/core';
import { IElementData } from '../../interfaces/element-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  elementsList: IElementData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.elementsList = this.dataService.getElements();
  }

  onSelect() {

  }

}
