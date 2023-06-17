import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent {
  pessoa: any;

  constructor(
    public dialogRef: MatDialogRef<PessoaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.pessoa = { ...data.pessoa };
  }

  salvar(): void {
    // Aqui você pode enviar os dados atualizados da pessoa para a API
    // e implementar a lógica de tratamento de sucesso ou erro, se necessário
    // ...

    // Fechar o pop-up e retornar os novos dados da pessoa
    this.dialogRef.close(this.pessoa);
  }

  cancelar(): void {
    // Fechar o pop-up sem retornar nenhuma alteração
    this.dialogRef.close();
  }
}
