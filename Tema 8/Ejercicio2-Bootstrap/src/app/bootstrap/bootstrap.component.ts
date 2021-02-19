import { Component, OnInit } from '@angular/core';

interface ccaa {
  Comunidad: string;
  dentregadas: number;
  dadmin: number;
  dcompleta: number;
  pcompleta: number;
  ppobladmin: number;
  ppoblacomp: number;
}

const COMUNIDADES: ccaa[] = [
  {
    Comunidad: 'Andalucia',
    dentregadas: 416830,
    dadmin: 328258,
    dcompleta: 104529,
    pcompleta: 78.99, 
    ppobladmin: 3.89,
    ppoblacomp: 1.23,

  },
  {
    Comunidad: 'Aragon',
    dentregadas: 71075,
    dadmin: 61036,
    dcompleta: 15157,
    pcompleta: 85.88, 
    ppobladmin: 4.59,
    ppoblacomp: 1.14,
  },
  {
    Comunidad: 'Asturias',
    dentregadas: 72835,
    dadmin: 61483,
    dcompleta: 22227,
    pcompleta: 83.48, 
    ppobladmin: 6.03,
    ppoblacomp: 2.18,
  },
  {
    Comunidad: 'Baleares',
    dentregadas: 36960,
    dadmin: 26240,
    dcompleta: 5262,
    pcompleta: 71.00, 
    ppobladmin: 2.24,
    ppoblacomp: 0.45,
  }
];


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {

  comunidades = COMUNIDADES;

  constructor() { }

  ngOnInit(): void {
  }

}
