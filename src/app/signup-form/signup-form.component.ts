import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {
 
  }

volunteerForm: FormGroup;

volunteerSkills = {
  skills: [
    { name: 'Leadership',  selected: false, id: 0 },
    { name: 'Management',  selected: false, id: 1 },
    { name: 'Team Support',  selected: false, id: 2 },
    { name: 'Other',  selected: false, id: 3 }
  ]
}

  buildSkills() {
    const arr = this.volunteerSkills.skills.map(skill => {
      return this.fb.control(skill.selected);
    })
    return this.fb.array(arr);
  }

  get skills() {
  return this.volunteerForm.get('skills');
  };

ngOnInit() {
    //Default values and validation for the volunteer form group
  this.volunteerForm = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],

      lastName: ['', [
        Validators.required]],
      email: ['',  [
        Validators.required,
        Validators.email
      ]],

      gender: ['',  [
        Validators.required]],

        skills: this.buildSkills(),

      about: [ '',  [
        Validators.required,
        Validators.minLength(10)
      ]],
    })

  }

  onSubmit(value) {
    
    const volunteerForm = Object.assign({}, value, {
      skills: value.skills.map(( selected, i) => {
        return {
          id: this.volunteerSkills.skills[i].id,
          selected,
          name: this.volunteerSkills.skills[i].name
       }
      })
    });

    console.log(volunteerForm);
  }
}
