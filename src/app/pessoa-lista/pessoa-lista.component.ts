import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PessoaEditarComponent } from '../pessoa-editar/pessoa-editar.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
  pessoas: any[] = [];
  corLinhas: string[] = ['branca', 'cinza', 'branca', 'cinza'];

  pageSizeOptions: number[] = [5, 10, 25];
  pageIndex = 0;
  pageSize = 5;
  totalItems = 0;
  currentPage = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarPessoas();
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const url = `http://localhost:8080/pessoas?_start=${startIndex}&_limit=${this.pageSize}`;

    this.http.get(url).subscribe((data: any) => {
      this.pessoas = data;
      this.http.head(url, { observe: 'response' }).subscribe((response: HttpResponse<any>) => {
        this.totalItems = Number(response.headers.get('X-Total-Count'));
      });
    });
  }

  openCadastroForm(): void {
    this.router.navigate(['/pessoa/cadastro']);
  }

  editarPessoa(pessoa: any): void {
    const confirmar = confirm('Deseja alterar os valores desta pessoa?');

    if (confirmar) {
      const dialogRef = this.dialog.open(PessoaEditarComponent, {
        data: { pessoa: pessoa },
        panelClass: 'edit-dialog'
      });

      dialogRef.afterClosed().subscribe((novoPessoa: any) => {
        if (novoPessoa) {
          // Enviar requisição PUT ou PATCH para a API com os novos valores
          // ...
          this.carregarPessoas();
        }
      });

    }
  }

  excluirPessoa(pessoa: any): void {
    const confirmar = confirm('Deseja excluir esta pessoa?');
    if (confirmar) {
      this.http.delete(`http://localhost:8080/pessoas/${pessoa.id}`).subscribe(
        () => {
          console.log('Pessoa excluída com sucesso');
          // Remover a pessoa da lista
          const index = this.pessoas.findIndex(p => p.id === pessoa.id);
          if (index !== -1) {
            this.pessoas.splice(index, 1);
            this.totalItems = this.pessoas.length;
          }
        },
        (error: any) => {
          console.error('Erro ao excluir pessoa:', error);
        }
      );
    }
  }
}
