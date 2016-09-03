import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public name;
  detailPage = DetailsPage;

  constructor(private navCtrl: NavController) {
    this.name = "阿干";
  }
}
