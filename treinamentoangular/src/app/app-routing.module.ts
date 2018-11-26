import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

const routes: Routes = [
  {path:"resumo", component: ResumoComponent},
  {path:"consulta", component: ConsultaComponent},
  {path:"faturamento", component:FaturamentoComponent },
  {path:"**", redirectTo: "/resumo"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
