import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input('parentData') public user;
  @Output() public sendData = new EventEmitter();
  public userName = '';
  public userId = ''; 
  public userD = {  };
  public errorMsg = '';

  public userData = [];

  constructor(private userDetails: UserDetailsService) { }

  ngOnInit() {
    //this.userData = this.userDetails.userData();
    this.userDetails.userData().subscribe(data => this.userData = data,
                                          error => this.errorMsg = error);
  }

  come(){
    this.userD = {
    "name": this.userName,
    "id": this.userId
    };
    this.sendData.emit(this.userD);
  }

}
