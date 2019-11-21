import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    // remove when done using
    console.log(this.detailsService.getAllDetails());
  }

}
