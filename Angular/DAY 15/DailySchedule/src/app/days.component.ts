import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { DaysService } from '../days.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent implements OnInit {
  days = [];
  noOfDays = 0;
  description = '';
  currentDay = 0;
  closeResult = '';

  constructor(private modalService: NgbModal) {}
  setCurrentDay(id) {
    // let btn = <HTMLButtonElement>document.getElementById('btntopic');
    this.currentDay = id;
    console.log('currentDay', id);
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(result);
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {}
  addDay() {
    this.noOfDays++;
    let dayDetails = {
      id: this.noOfDays,
      name: 'Day' + this.noOfDays,
      topics: [],
    };
    console.log(this.days);
    console.log(this.noOfDays);

    this.days.push(dayDetails);
    //this.dayService.setOnlyDays('Day ' + this.noOfDays);
  }
  addTopic() {}
}
