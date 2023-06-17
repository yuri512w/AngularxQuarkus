import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
;


const routes: Routes = [
  { path: 'pessoa', component: PessoaListaComponent },
  { path: 'pessoa/cadastro', component: PessoaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
