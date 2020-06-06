import { OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export abstract class AbstractOnDestroyComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
