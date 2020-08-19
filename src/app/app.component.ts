import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: ['app.component.css']
})

export class AppComponent {
    emoji = ['😀', '😃', '😄', '😁' ];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]
    }
}