import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  
  resumo = {
      consultas : {
        anteriores : {
          total : 87,
          detalhes : [
              { especialidade : "Cardiologia", quantidade : 20 },
              { especialidade : "Clínica Geral", quantidade : 30 },
           ]
         },
         marcadas : {
           total : 79,
           detalhes : [
               { especialidade : "Cardiologia", quantidade : 19 },
               { especialidade : "Clínica Geral", quantidade : 28 },
           ]
         }
       },
       faturamento : {
         anterior : {
           valor : 100000,
           comparativo : 19
         },
         previsao : {
           valor : 90000,
           comparativo : -10 
         }
       }
     };

  constructor() { }

  ngOnInit() {
  }

}
