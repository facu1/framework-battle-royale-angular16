import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonComponent } from '../g-button';
import { DialogService } from '@src/services';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-g-dialog',
  standalone: true,
  imports: [CommonModule, GButtonComponent],
  templateUrl: './g-dialog.component.html',
  styleUrls: ['./g-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GDialogComponent {
  // Subject way
  // isOpen = false;

  // constructor(private dialogService: DialogService) {
  //   dialogService.$dialogSubject
  //     .getSubject()
  //     .pipe(takeUntilDestroyed())
  //     .subscribe((dialogState) => (this.isOpen = dialogState));
  // }

  // closeDialog() {
  //   this.isOpen = false;
  //   // OR
  //   // this.dialogService.$dialogSubject.setSubject(false);
  // }

  // Signals way
  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;

  closeDialog() {
    this.dialogService.dialogSignal.set(false);
  }
}
