import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
       this.navCtrl.setRoot('HomePage');  
      }      
      else {
        this.navCtrl.setRoot('LoginPage');
      }
    }
    catch (e) {
      console.log(e);
      this.toast.create({
        message: 'Combinatie wachtwoord en gebruikersnaam is verkeerd',
        duration: 4000
      }).present();

    }
  }



}
