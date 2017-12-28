import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import {RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disciplinas = [
    new Disciplina('Portugues', 'descricao linguagem pt-br'),
    new Disciplina('Matematica', 'descricao linguagem pt-br'),
    new Disciplina('Ingles', 'descricao linguagem pt-br'),
    new Disciplina('Ciencias', 'descricao linguagem pt-br'),

  ];

  selecionado = null;
  nome = null;
  descricao = null;
  editando = null;

  selecionar(disciplina) {
    this.selecionado = disciplina;
  }
  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
    } else {
      const d = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(d);
    }
    this.nome = null;
    this.descricao = null;
    this.editando = null;
  }

  excluir(disciplina) {
    if (this.editando === disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Deseja excluir a disciplina: ' + disciplina.nome + '?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
      }
    }
  }

  editar(disciplina) {
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.nome = null;
    this.descricao = null;
    this.editando = null;
  }
}
