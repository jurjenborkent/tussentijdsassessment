import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evenement } from '../../models/evenement/evenement.model';
import { EvenementenService } from '../../services/evenementen/evenementen.service';

/**
 * Generated class for the EvenementToevoegenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenement-toevoegen',
  templateUrl: 'evenement-toevoegen.html',
})
export class EvenementToevoegenPage {
  toast: any;

  evenement: Evenement = {
    titel: '',
    beschrijving: '',
    locatie: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private evenementen: EvenementenService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenementToevoegenPage');
  }

  evenementToevoegen(item: Evenement) {
    this.evenementen.evenementToevoegen(item).then(ref => {
      this.navCtrl.setRoot('HomePage', { key: ref.key });
    });
  }

  evenementVerwijderen(item: Evenement) {
    this.evenementen.evenementVerwijderen(item).then(() => {
      this.toast.show('${item.titel} verwijderd!');
      this.navCtrl.setRoot('HomePage');
    });
  }
}
