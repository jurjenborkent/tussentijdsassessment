import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { EvenementenService } from '../../services/evenementen/evenementen.service';
import { Observable } from 'rxjs/Observable';
import { Evenement } from '../../models/evenement/evenement.model';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  evenementen$: Observable<Evenement[]>;

  constructor(public navCtrl: NavController, private evenementen: EvenementenService) {
    this.evenementen$ = this.evenementen
      .getEvenementen() //Database lijst
      .snapshotChanges() //Key en Waarde
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }));
      });
  }

}
