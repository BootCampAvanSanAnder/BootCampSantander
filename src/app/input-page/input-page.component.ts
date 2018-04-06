import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/user-profile.model';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  /*
    Lista de usuários criados individualmente para
    fins didáticos de demonstração do conceito de
    binding de dados no Input de um component
  */
  public usuario1 = new UserProfileModel(
    'Anderson de Mello',
    'São Paulo, SP',
    'Desenvolvedor Front-End Sênior');

  public usuario2 = new UserProfileModel(
    'Carlos Monteiro',
    'Rio de Janeiro, RJ',
    'Gerente de Tecnologia da Informação');

  public usuario3 = new UserProfileModel(
    'Adriana de Andrade',
    'Guarulhos, SP',
    'Coordenadora de Operações Financeiras');

  /*
    TODO: Criar os elementos de input com
          o devido decorador mencionado
          no curso.
  */

  constructor() { }

  ngOnInit() {
  }

}
