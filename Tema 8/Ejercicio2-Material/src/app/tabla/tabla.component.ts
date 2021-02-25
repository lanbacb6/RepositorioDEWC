import { Component, OnInit } from '@angular/core';
import { ComunidadElement } from '../common/interfaces';
import { VacunacionService } from '../service/vacunacion.service';

const ELEMENT_DATA: ComunidadElement[] = [
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.sass']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['comunidad', 'dEntregadas', 'dAdmin', 'dCompleta', 'pEntregadas', 'pPoblAdmin', 'pPoblCompleta'];
  dataSource = ELEMENT_DATA;

  constructor(public _vacunacion: VacunacionService) { }

  ngOnInit(): void {
  }

  vacunacion() {}

  click() {
    console.log("click");
    this._vacunacion.vacunacion.subscribe((response) => {
      console.log(response);
      this.dataSource = response;
    });
  }

}