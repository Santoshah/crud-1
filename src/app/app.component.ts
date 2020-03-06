import { Component, ViewChild, Input } from '@angular/core';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';
  dataList = [
    { name: "Gama", age:28, phone: 123456132 },
    { name: "Thita", age:28, phone: 321654456 },
    { name: "Beta", age:28, phone: 654654987 },
    { name: "Alpha", age:28, phone: 654321654 },
    { name: "Pie", age:28, phone: 321654987 },
  ];

  currentArrayIndex: number = this.dataList.length; 
  noOfItem: number = 0;
  
  showForm: boolean = false;
  editData : any = [];

  showAddUserForm(){
    this.showForm = true;
    this.currentArrayIndex = this.dataList.length;
    this.noOfItem = 0;

  }
  hideUserForm($res){
    this.showForm = $res;
  }

  pushToArray($event){
    // console.log($event);
    this.dataList.splice(this.currentArrayIndex, this.noOfItem, $event);
    this.showForm = false;
  }

  deleteDataUser(index: number) {
    this.dataList.splice(index, 1);
  }

  editDataUser(index){
    this.currentArrayIndex = index;
    this.noOfItem = 1;
    this.editData = this.dataList[index];
    this.showForm = true;
  }

}
