import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const rawValues = this.contactForm.getRawValue()
    console.log(rawValues)
    alert("Message sent!")
  }

}
