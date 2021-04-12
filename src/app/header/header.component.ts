import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = "Humayun Kabir"
  flag = false


  constructor() { }

  ngOnInit(): void {
  }

  CallMyFunc() {
    this.flag = !this.flag
    console.log("Function Called ", this.flag)
  }

  updateValue(e) {
    this.name = e.target.value
    console.log(e.target.value)
  }

}
