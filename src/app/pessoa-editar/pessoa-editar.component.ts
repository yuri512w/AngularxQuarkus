import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent {
  pessoa: any;
  pessoaData: any;

  constructor(
    public dialogRef: MatDialogRef<PessoaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    this.pessoa = { ...data.pessoa };

  }

  salvar(): void {
    const { tipoPessoa, id, ...pessoaData } = this.pessoa;
    this.pessoaData = pessoaData;
    this.http.put(`http://localhost:8080/pessoas/${this.pessoa.id}`, this.pessoaData).subscribe(
      () => {

        console.log('Pessoa alterada com sucesso');
        // Remover a pessoa da lista (se necessário)
      },
      error => {
        console.error('Erro ao alterar pessoa', error);
      }
    );

    // Aqui você pode implementar a lógica de tratamento de sucesso ou erro, se necessário
    // ...

    // Fechar o pop-up e retornar os novos dados da pessoa
    this.dialogRef.close(this.pessoa);

  }

  cancelar(): void {
    // Fechar o pop-up sem retornar nenhuma alteração
    this.dialogRef.close();
  }
}
