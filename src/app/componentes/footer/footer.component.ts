import { Component, OnInit } from '@angular/core';

import {  InfoService } from "../../services/info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha: any = new Date().getFullYear();

  datosPag: any = '';

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getInfoPag()
    .subscribe((resp: any) =>{
      this.datosPag = resp;        
    });
  }

}
