import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 

  onOptionSelected(option: string) {
    switch (option) {
      case 'pessoa':
        this.router.navigate(['/pessoa']);
        break;
      case 'produto':
        // Chamar o seletor de Produto
        break;
      default:
        // Caso de seleção inválida
        break;
    }
  }

}
