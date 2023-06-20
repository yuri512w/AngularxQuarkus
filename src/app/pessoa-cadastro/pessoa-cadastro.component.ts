import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  pessoa = {
    cpf: '',
    nome: '',
    sobrenome: ''

    // Adicione outros campos da pessoa de acordo com sua necessidade
  };

  constructor(private http: HttpClient, private router: Router) { }

  submitForm(): void {
    this.http.post('http://localhost:8080/pessoas', this.pessoa).subscribe(
      (response: any) => {
        console.log(response);
        // Verifique se a resposta é um JSON válido
        try {
          const jsonResponse = JSON.parse(response);
          // Faça o processamento necessário com o JSON recebido
        } catch (error) {
          console.error(error);
        }
        // Redirecione para a lista de pessoas após o cadastro
        this.router.navigate(['/pessoa']);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


}
