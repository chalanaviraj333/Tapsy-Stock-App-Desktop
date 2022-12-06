import { Component, OnInit } from '@angular/core';
import { DatabaseServiceTabTwoService } from '../database-service-tab-two.service';

@Component({
  selector: 'app-low-stock-tab',
  templateUrl: './low-stock-tab.page.html',
  styleUrls: ['./low-stock-tab.page.scss'],
})
export class LowStockTabPage implements OnInit {

  constructor(public databaseTabTwoService: DatabaseServiceTabTwoService) { }

  ngOnInit() {
    this.databaseTabTwoService.findLowStockItems();
  }

}
