import { Component, Input, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string /*Importando variavel de outro component */
  @Input() type = 'success' /*: é o tipo da variavel ex, string // o = é para receber um valor na variavel */

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }
  /*Método para fechar o modal */
  onClose(){
    this.modal.hide() /*hide vai esconder */
  }

}
