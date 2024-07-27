import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnbodyComponent } from './mainnbody.component';

describe('MainnbodyComponent', () => {
  let component: MainnbodyComponent;
  let fixture: ComponentFixture<MainnbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainnbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainnbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
