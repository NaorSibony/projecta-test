import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loader-layout',
  templateUrl: './loader-layout.component.html',
  styleUrls: ['./loader-layout.component.scss']
})
export class LoaderLayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit(): void {
    this.isLoading$ = this.isLoadingSubject$.asObservable();
  }

  setIsLoading(isLoadingVal: boolean) {
    this.isLoadingSubject$.next(isLoadingVal);
  }
}
