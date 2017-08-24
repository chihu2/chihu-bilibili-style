import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = 'HomeWorkPage';
  page2: any = 'HomeSharePage';
  page3: any = 'HomeArticlePage';

  constructor(public navCtrl: NavController) {

  }

}
