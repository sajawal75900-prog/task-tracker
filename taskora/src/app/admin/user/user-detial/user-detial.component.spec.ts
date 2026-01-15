import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetialComponent } from './user-detial.component';

describe('UserDetialComponent', () => {
  let component: UserDetialComponent;
  let fixture: ComponentFixture<UserDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
