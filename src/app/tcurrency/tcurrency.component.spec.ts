import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcurrencyComponent } from './tcurrency.component';

describe('TcurrencyComponent', () => {
  let component: TcurrencyComponent;
  let fixture: ComponentFixture<TcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
