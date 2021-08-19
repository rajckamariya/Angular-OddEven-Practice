import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}
  onGameStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onGamePause() {
    clearInterval(this.interval);
  }
}
