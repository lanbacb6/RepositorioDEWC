
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ComunidadElement } from '../common/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacunacionService {

  api_url: string = 'https://covid-vacuna.app/data/latest.json';
  vacunacion: Observable<ComunidadElement[]>;

  toggle: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toggle$ = this.toggle.asObservable();

  constructor(private _http: HttpClient) {
    console.log('servicio creado');
    this.get_vaccination();
  }

  get_vaccination() {
    this.vacunacion = this._http.get<ComunidadElement[]>(this.api_url);
  }
}