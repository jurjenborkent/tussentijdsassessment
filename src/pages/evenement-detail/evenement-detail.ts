import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evenement } from '../../models/evenement/evenement.model';

/**
 * Generated class for the EvenementDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenement-detail',
  templateUrl: 'evenement-detail.html',
})
export class EvenementDetailPage {

  item: Evenement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  

}
