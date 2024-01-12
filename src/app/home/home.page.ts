import { Component } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public service:ServiceService) {}

  getApiFnCall() {
    this.service.getLiveApiUrl().subscribe((data)=>{
      console.log(data)
    })
  }

}
