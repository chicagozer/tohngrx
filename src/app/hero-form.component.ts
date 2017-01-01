import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-hero-form',
    template: require('./hero-form.component.html'),
    styles: [require('./hero-form.component.css')]
})
export class HeroFormComponent {
    @Input() hero;


    @Output() goBack = new EventEmitter();
    @Output() save = new EventEmitter();
}
