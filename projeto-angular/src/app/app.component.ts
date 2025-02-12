import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './components/meu-componente/meu-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MeuComponenteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
  mensagem: string = "Olá mundo!"
  pessoa: {nome:string, interesses:Array<string>} = {
    nome:"Pedro",
    interesses: [
      "futebol",
      "videogame"
    ]
  }
}


