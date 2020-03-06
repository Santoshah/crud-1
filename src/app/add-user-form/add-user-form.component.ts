
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
  
})
export class AddUserFormComponent implements OnInit {
  @Input() message: any;
  @Input() editUserStatus: number;

  @Output() showUserForm = new EventEmitter<boolean>();
  @Output() submitUsersData = new EventEmitter<boolean>();

  hideAddUserForm(){
    this.showUserForm.emit(false);
  }
  
  addUserFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  onSubmit(){
    this.submitUsersData.emit(this.addUserFormGroup.value);
  }

  
  editDataToForm(){
    if(this.message != '' || this.message != undefined) {
      // console.log(this.message);
      this.addUserFormGroup.patchValue({
        name: this.message.name,
        age: this.message.age,
        phone: this.message.phone,
      })

    }
  }
  ngOnInit() {

    this.addUserFormGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      phone:['', Validators.required],
    })
    
  }


    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.

      setTimeout(() => {
        this.editDataToForm();  
        if(this.editUserStatus === 0) {
          this.addUserFormGroup.reset()
        }
      }, );
      
    }


  

}
