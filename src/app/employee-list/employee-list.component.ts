import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  public tableWidget: any;
 
 ngAfterViewInit() {
    this.initDatatable()
  }

private initDatatable(): void {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
  ngOnInit() {
      
  }
}
