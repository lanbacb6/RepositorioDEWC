import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { item } from '../interfaces/interface'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  api_url: string = 'https://raw.githubusercontent.com/chemaduran/json/main/ofertas.json';
  centros: Observable<info_centros[]>;
 

  toggle: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toggle$ = this.toggle.asObservable();

 
}
