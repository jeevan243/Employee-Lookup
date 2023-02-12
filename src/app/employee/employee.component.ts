import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employmentForm = new FormGroup({});
  }

  ngOnInit() {
    this.employmentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
      country: ['', [Validators.required]],
      salaryId: ['', [Validators.required]],
    });
  }

  handleSubmit() {
    const storedData = localStorage.getItem('employeeData');
    let data = storedData ? JSON.parse(storedData) : [];

    if (!this.employmentForm.valid) {
      console.log('Form is not valid. Please fill in all the required fields.');
      return;
    }
    data.push(this.employmentForm.value);
    localStorage.setItem('employeeData', JSON.stringify(data));
  }
}
