import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketComponent } from './add-market.component';

describe('AddMarketComponent', () => {
  let component: AddMarketComponent;
  let fixture: ComponentFixture<AddMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
