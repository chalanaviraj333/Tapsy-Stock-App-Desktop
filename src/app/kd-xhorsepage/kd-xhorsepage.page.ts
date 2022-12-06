import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { XhorsekdDatabaseService } from '../services/xhorsekd-database.service';

@Component({
  selector: 'app-kd-xhorsepage',
  templateUrl: './kd-xhorsepage.page.html',
  styleUrls: ['./kd-xhorsepage.page.scss'],
})
export class KdXhorsepagePage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;
  public data: any;

  constructor(public xhorsekdDatabaseService: XhorsekdDatabaseService) { }

  ngOnInit() {
    this.xhorsekdDatabaseService.getAlllKDXhorseRemotes();
  }

  counter(i: number) {
    return new Array(i);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 1000);
  }

  ngOnDestroy() {}


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



}
