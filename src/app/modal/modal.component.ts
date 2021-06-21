import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalInstance: NgbModalRef
  constructor() { }

  ngOnInit() {
  }

  Close(): void {
    this.modalInstance.close("No")
    
  }
  
  Yes(): void {
    this.modalInstance.close("Yes")
  }

}
