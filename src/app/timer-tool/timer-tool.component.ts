import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-tool',
  templateUrl: './timer-tool.component.html',
  styleUrl: './timer-tool.component.scss'
})
export class TimerToolComponent implements OnInit {

  public minute: number = 5;
  public second: number = 0;
  public isPaused: boolean = true;
  private interval: any;
  constructor() {}
  ngOnInit(): void {
    
  }
  startTimer() {
    this.isPaused = false;
    this.interval = setInterval(() => {
      if (this.second > 0) {
        this.second--;
      } else if (this.minute > 0) {
        this.minute--;
        this.second = 59;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.isPaused = true;
  }

  resumeTimer() {
    this.startTimer();
  }

  resetTimer() {
    this.minute = 5;
    this.second = 0;
    this.isPaused = true;
    clearInterval(this.interval);
  }

  private stopTimer() {
    clearInterval(this.interval);
    this.isPaused = true;
  }
}


