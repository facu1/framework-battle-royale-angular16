import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonComponent, GDialogComponent } from '@src/components';
import { DialogService } from '@src/services';
import { GUserFormComponent } from '../g-user-form';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    GButtonComponent,
    GDialogComponent,
    GUserFormComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  dialogService = inject(DialogService);

  // Subject way
  // openDialog() {
  //   this.dialogService.$dialogSubject.setSubject(true);
  // }

  // Signal way
  openDialog() {
    this.dialogService.dialogSignal.set(true);
  }
}
