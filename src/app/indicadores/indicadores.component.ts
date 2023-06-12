import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IndicadoresDto } from "../dto/indicadores.dto";

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {
  indicadores: IndicadoresDto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIndicadores();
  }

  getIndicadores() {
    const url = 'http://localhost:9090/api/v1/indicador';

    this.http.get<IndicadoresDto[]>(url).subscribe(
      (response) => {
        this.indicadores = response;
        console.log('Indicadores:', this.indicadores);
      },
      (error) => {
        console.log('Error al obtener los indicadores:', error);
      }
    );
  }




  // Puedes agregar otras funciones para realizar otras llamadas HTTP, como crear un nuevo indicador

}
