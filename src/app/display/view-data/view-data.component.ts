import { Component, OnInit } from '@angular/core';
import{Http,Response,Headers} from '@angular/http';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  treeset : string[];
  constructor(private http:Http) { }

  // fetchData = function(){
  //   this.http.get("./assets/trees.json").subscribe(
  //     data=>{
  //       this.treeset = data as string;
  //       console.log(this.treeset)
  //     }
  //   )
  // }
  fetchData = function(){
    this.http.get("https://my-json-server.typicode.com/purvanatoo-97/datahandle/db").subscribe(
     (res:Response)=>{
        this.treeset = res.json();
        console.log(this.treeset)
      }
    )
  }
  
  ngOnInit() {
    console.log(this.treeset);
    this.fetchData();
  }

}
