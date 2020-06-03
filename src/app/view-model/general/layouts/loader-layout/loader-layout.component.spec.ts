import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderLayoutComponent } from './loader-layout.component';

describe('LoaderLayoutComponent', () => {
  let component: LoaderLayoutComponent;
  let fixture: ComponentFixture<LoaderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderLayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
