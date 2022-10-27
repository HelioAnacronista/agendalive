import { Live } from './../../../shared/model/live.model';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {
  
  livesPrevious!: Live[];
  livesNext!: Live[];

  constructor(
    public liveService : LiveService
  ) { }

  ngOnInit(): void {
    this.getLive();
  }

  getLive() {
    this.liveService.getLivesWithflag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      console.log(this.livesPrevious);
    });

    this.liveService.getLivesWithflag('next').subscribe(data => {
      this.livesNext = data.content;
      console.log(this.livesNext);
    });
  }

}

  

