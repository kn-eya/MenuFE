import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoMenuComponent } from './perso-menu.component';

describe('PersoMenuComponent', () => {
  let component: PersoMenuComponent;
  let fixture: ComponentFixture<PersoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersoMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
