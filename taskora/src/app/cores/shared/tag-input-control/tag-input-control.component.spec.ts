import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInputControlComponent } from './tag-input-control.component';

describe('TagInputControlComponent', () => {
  let component: TagInputControlComponent;
  let fixture: ComponentFixture<TagInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagInputControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
