import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IModalOptions } from 'src/app/core/models/IModalOptions';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('globalModal', { static: false }) modalElement: ElementRef;
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.modalService.setup({ modalContainer: this.modalElement, modalComponent: this });
  }

}
