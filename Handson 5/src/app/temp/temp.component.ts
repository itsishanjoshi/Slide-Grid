import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  header=["ID","Name","Skills","Gender","Project","HCM","Options"]
  @Input() content: any[];
  edit=new Array();
  form;
  value;
  isHidden: boolean = false;

  constructor(private service:DataService,fb: FormBuilder) {
    this.form = fb.group({
      id:[''],
      name:[''],
      skills:[''],
      gender:[''],
      project:[''],
      hcm:['']
    })
  }

  ngOnInit() {
    this.service.getData()
    .subscribe(response =>{
      (this.content as Object)=response;
    })
  }

  deleteData(entry){
    this.service.getData()
    .subscribe(response =>{
      let index=this.content.indexOf(entry);
      this.content.splice(index,1);
    })

  }
  updateData(value){
    this.edit[value]=true;
  }

  save(value){
    this.edit[value]=false;
  }

  submit(){
    this.value = this.form.value;
    this.content.push(this.value);
    this.form.reset();
  }
  add(){
    this.isHidden =! this.isHidden;
  }
}
