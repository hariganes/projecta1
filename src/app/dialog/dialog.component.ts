import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  productForm !: FormGroup;
  actionbtn : string="Save"
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formBuilder : FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any,
  private dialogRef:MatDialogRef<DialogComponent> )
   { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({

      DomainName : ['',Validators.required],
      email : ['',Validators.required],
      Mobile : ['',Validators.required],
      CompanyName : ['',Validators.required],
      CostumerName : ['',Validators.required],
      Registrar : ['',Validators.required],
      date1 : ['',Validators.required],
      date2 : ['',Validators.required],
      Provider: ['',Validators.required],
      ACTIVATION : ['',Validators.required],
      EXPIRY : ['',Validators.required],
      Plan:['',Validators.required]
    });
    console.log(this.editData);
    if(this.editData){
      this.actionbtn = "Update";
      this.productForm.controls['DomainName'].setValue(this.editData.DomainName);
      this.productForm.controls['email'].setValue(this.editData.email);
      this.productForm.controls['Mobile'].setValue(this.editData.Mobile);
      this.productForm.controls['CompanyName'].setValue(this.editData.CompanyName);
      this.productForm.controls['CostumerName'].setValue(this.editData.CostumerName);
      this.productForm.controls['Registrar'].setValue(this.editData.Registrar);
      this.productForm.controls['date1'].setValue(this.editData.date1);
      this.productForm.controls['ACTIVATION'].setValue(this.editData.ACTIVATION);
      this.productForm.controls['Provider'].setValue(this.editData.Provider);
      this.productForm.controls['EXPIRY'].setValue(this.editData.EXPIRY);
      this.productForm.controls['Plan'].setValue(this.editData.controls);
    }
  }

add()
{
  console.log(this.productForm.valid)
  if(!this.editData){
    if(this.productForm.value)
  {
    this.api.postProduct(this.productForm.value)
    .subscribe({
      next:(res)=>{
        alert("Costumer added Succesfully")
        this.productForm.reset();
        this.dialogRef.close('save');
        this.getAllProduct();

      },
      error:()=>{
        alert("Error while adding costumer")
      }
    })
  }
  }
  else{
    this.updateProdct()
  }

}
getErrorMessage()
  {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }
  return this.email.hasError('email') ? 'Not a valid email' : '';
  }
getAllProduct()
  {
    throw new Error('Method not implemented.');
  }
updateProdct(){
  this.api.putProduct(this.productForm.value, this.editData.id)
  .subscribe({
    next:(res)=>{
    alert("Product updated succesfully");
    this.productForm.reset();
    this.dialogRef.close('update');
    },
    error:()=>{
      alert("error while updating the record");
    }
  })
}

}
