import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Evenement } from "../../models/evenement/evenement.model";

@Injectable()
export class EvenementenService {

    private evenementenRef = this.db.list<Evenement>('evenementen');

    constructor(private db: AngularFireDatabase) { }

    getEvenementen() {
        return this.evenementenRef;
    }

    evenementToevoegen(evenement: Evenement) {
        return this.evenementenRef.push(evenement);
    }

    evenementVerwijderen(evenement: Evenement) {
        return this.evenementenRef.remove(evenement.key);
    }
}