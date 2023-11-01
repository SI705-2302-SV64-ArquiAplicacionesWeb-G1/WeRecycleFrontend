import { RecyclableMaterial } from './../../models/recyclable-material';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecyclableMaterialService } from 'src/app/services/recyclable-material.service';

@Component({
  selector: 'app-recyclable-material',
  templateUrl: './recyclable-material.component.html',
  styleUrls: ['./recyclable-material.component.css'],
})
export class RecyclableMaterialComponent{
  constructor(public route: ActivatedRoute){}
}
console.log("vamos")