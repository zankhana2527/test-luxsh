import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tableColumns = ["Name", "Position", "Office", "extn.", "Start Date", "Salary"];

  tableRows: any = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getTableData().subscribe((res:any) => {
      console.log(res.data);
      this.tableRows = res.data;
    })
  }

}
