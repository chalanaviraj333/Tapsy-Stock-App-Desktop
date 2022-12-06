import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { Storage } from '@capacitor/storage';
import { DatabaseServiceTabTwoService } from '../database-service-tab-two.service';
import { ModalserviceService } from '../modalservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  public username: string = 'user1';

  constructor(private databaseService: DatabaseServiceService, private router: Router, 
  public databaseTabTwoService: DatabaseServiceTabTwoService) { }

  ngOnInit() {  
      Storage.get({key: 'username'}).then(
        storedData => {
          if (!storedData || !storedData.value) {
            return;
          }
          this.username = JSON.parse(storedData.value);
        });

    this.databaseTabTwoService.getAllRemotes();
  }

  onClickUsernameSave() {
    
    if (this.username == '' || this.username == null){
      return;
    }
    this.databaseService.setUsername(this.username);
  }

  onClickMostSelling() {

  }

  onClickLowStock() {
    this.router.navigateByUrl('tabs/more/lowstockitems');
  }

  onClickGarageRemotes() {
    this.router.navigateByUrl('tabs/more/all-garage-remotes');
  }

}

