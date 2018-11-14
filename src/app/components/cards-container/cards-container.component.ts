import { Component, OnInit } from '@angular/core';

// import { Participant } from '../../store/models/participant';
import { Observable } from 'rxjs';

// import * as fromRoot from '../../store/reducers/index';
// import * as fromActions from '../../store/actions/participant';

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: [ './cards-container.component.scss']
})
export class CardsContainerComponent {

  participants = [{ id: 'string', identifier: 'Hook', ready: false }];
  // $participants: Obserfvable<Array<Participant>>;


  // ngOnInit(): void {
  //   this._store.dispatch(new fromActions.LoadParticipants());
  //   this._store.dispatch(new fromActions.ParticipantsSockerSubscribe());

  //   this.$participants = this._store.select(fromRoot.getParticipants);
  // }

  // trackByFn = (participant: Participant) => participant.id;
}
