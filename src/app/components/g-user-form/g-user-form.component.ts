import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  NonNullableFormBuilder,
  FormGroup,
} from '@angular/forms';
import { UserService } from '@src/app/services';
import { GButtonComponent } from '@src/components';
import { DialogService } from '@src/services';

@Component({
  selector: 'app-g-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GButtonComponent],
  templateUrl: './g-user-form.component.html',
  styleUrls: ['./g-user-form.component.css'],
})
export class GUserFormComponent {
  fb = inject(NonNullableFormBuilder);
  userService = inject(UserService);
  dialogService = inject(DialogService);

  form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
  });

  submit() {
    if (this.form.valid) {
      this.userService.setUserFormState(this.form.getRawValue());
      this.dialogService.dialogSignal.set(false);
    } else this.form.markAllAsTouched();
  }
}
