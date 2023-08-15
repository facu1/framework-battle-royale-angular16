// Subject way
// import { Injectable, signal } from '@angular/core';
// import { SubjectManager } from '@src/utilities';

// @Injectable({
//   providedIn: 'root',
// })
// export class DialogService {
//   $dialogSubject = new SubjectManager();
// }

// Signals way
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogSignal = signal(false);
}
