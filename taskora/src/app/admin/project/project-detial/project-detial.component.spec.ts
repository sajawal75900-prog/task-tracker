import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetialComponent } from './project-detial.component';

describe('ProjectDetialComponent', () => {
  let component: ProjectDetialComponent;
  let fixture: ComponentFixture<ProjectDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
