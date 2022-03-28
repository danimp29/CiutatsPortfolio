import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { 

  }

  public getInfoPag(){

    return this.http.get('assets/data/infoPag.json') ;
      
  }

  public getDatosEquipo(){

    return this.http.get('https://portfoliociutats-default-rtdb.firebaseio.com/equipo/equipo.json');
  }
} 

