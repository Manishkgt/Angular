import { Component, OnInit } from '@angular/core';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  slidein: any;
  
  constructor(private styleservice: StyleService) {}
  ngOnInit() {
     this.slidein = this.styleservice.SlideIn();
     
  }

}
