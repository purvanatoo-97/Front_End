import { Component, OnInit } from '@angular/core';
import { DetailsService } from './services/details.service';
import { DetailsModel } from './models/details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DetailsService]
})
export class AppComponent implements OnInit {
  title = 'Final-Work';
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.getAllData().subscribe(
      response => {
        // console.log(response.json()[0]);
        for (const iterator of response.json()) {
          this.detailsService.addDetails({
            wardNo: iterator.ward_no,
            noTrees: iterator.no_trees,
            population: iterator.population,
            co2Absorbtion: iterator.co2_absorbtion,
            co2EmittedPopulation: iterator.co2_emitted_population,
            co2EmittedVehicles: iterator.co2_emitted_vehicles,
            co2EmittedTotal: iterator.co2_emitted_total,
            excessCo2: iterator.excess_co2,
            treeRequire: iterator.tree_required
          } as DetailsModel);
          console.log(iterator.ward_no);
        }
      }
    );
    console.log(this.detailsService.getAllData());
  }
}
