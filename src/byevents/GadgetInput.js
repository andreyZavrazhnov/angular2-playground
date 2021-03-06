import {
    ComponentAnnotation as Component,
    ViewAnnotation as View,
    NgIf,
    Observable,
    EventEmitter
} from 'angular2/angular2';

@Component({
  selector: 'gadget-input',
  events: ['store']
})
@View({
  templateUrl: `byevents/gadget_input.html`,
  directives: [NgIf]
})
export class GadgetInput {

  name:string;
  store: EventEmitter;

  constructor() {
    this.name = '';
    this.store = new EventEmitter();
  }

  update(username) {
    this.name = username;
    console.log('update', this.name);
  }

  add() {
    if (this.name !== undefined && this.name !== '') {
      this.store.next(''+this.name);
    }
  }

}
