import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { DatabaseServiceTabTwoService } from '../database-service-tab-two.service';

@Component({
  selector: 'app-low-stock-items',
  templateUrl: './low-stock-items.page.html',
  styleUrls: ['./low-stock-items.page.scss'],
})
export class LowStockItemsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent

  public hideButton: boolean = false;

  constructor(public databaseTabTwoService: DatabaseServiceTabTwoService) { }

  ngOnInit() {
    // this.databaseTabTwoService.findLowStockItems();
  }

  logScrollStart() {
    setTimeout(() => {
      this.hideButton = true;
    }, 500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
      this.hideButton = false;
    }, 4000);
  }

  onClick(item) {
    
  }

}
