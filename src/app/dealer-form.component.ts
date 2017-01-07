import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-dealer-form',
    template: require('./dealer-form.component.html'),
    styles: [require('./dealer-form.component.css')]
})
export class DealerFormComponent {
    @Input() dealer;


    @Output() goBack = new EventEmitter();
    @Output() save = new EventEmitter();
}
