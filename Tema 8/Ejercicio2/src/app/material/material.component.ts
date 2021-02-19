import { Component, OnInit } from '@angular/core';

interface Comunidad {
  value: string;
  viewValue: string;
}

export interface ComunidadElement {
  comunidad: string;
  dEntregadas: number;
  dAdmin: number;
  dCompleta: number;
  pEntregadas: number;
  pPoblAdmin: number;
  pPoblCompleta: number;
}

const ELEMENT_DATA: ComunidadElement[] = [
  {comunidad: 'Andalucía', dEntregadas: 416830, dAdmin: 229256, dCompleta: 104529, pEntregadas: 78.99, pPoblAdmin: 3.89, pPoblCompleta: 2.12},
  {comunidad: 'Aragón', dEntregadas: 416830, dAdmin: 12956, dCompleta: 12149, pEntregadas: 48.99, pPoblAdmin: 0.89, pPoblCompleta: 1.23},
  {comunidad: 'Asturias', dEntregadas: 416830, dAdmin: 21572, dCompleta: 14553, pEntregadas: 58.99, pPoblAdmin: 1.89, pPoblCompleta: 2.25},
  {comunidad: 'Baleares', dEntregadas: 416830, dAdmin: 425438, dCompleta: 94249, pEntregadas: 68.19, pPoblAdmin: 2.89, pPoblCompleta: 5.23},
];

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  comunidades: Comunidad[] = [
    {value: 'Andalucía', viewValue: 'Andalucía'},
    {value: 'Aragón', viewValue: 'Aragón'},
    {value: 'Asturias', viewValue: 'Asturias'}
  ];

  displayedColumns: string[] = ['comunidad', 'dEntregadas', 'dAdmin', 'dCompleta', 'pEntregadas', 'pPoblAdmin', 'pPoblCompleta'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
