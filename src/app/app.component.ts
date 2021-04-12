import { RecordsService } from './records.service';
import { Component } from '@angular/core';



@Component({
  selector: 'hk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  country = "Bangladesh";

  persons = []
  constructor(private myFirstService: RecordsService) {

  }

  ngOnInit() {
    this.persons = this.myFirstService.getData()
    console.log(this.persons)
  }

}
