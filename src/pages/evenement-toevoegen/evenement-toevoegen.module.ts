import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvenementToevoegenPage } from './evenement-toevoegen';

@NgModule({
  declarations: [
    EvenementToevoegenPage,
  ],
  imports: [
    IonicPageModule.forChild(EvenementToevoegenPage),
  ],
})
export class EvenementToevoegenPageModule {}
