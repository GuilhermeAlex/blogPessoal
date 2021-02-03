import { Injectable } from '@angular/core';
import {BsModalRef,BsModalService} from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }
    private showAlert(message: string, tipo: string){ /*Passando os parametros */
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)     /*A constante tras mais segurança para a aplicação // a const ta recebendp a modal service para mostrar o componente alertas*/
    bsModalRef.content.type = tipo
    bsModalRef.content.message = message
  }
  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }
  showAlertSuccess(message: string){
    this.showAlert(message, 'success')
  }
  /*Passando uma informação ao usuario */
  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }





}
