import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChild1Component } from './user-child1.component';

describe('UserChild1Component', () => {
  let component: UserChild1Component;
  let fixture: ComponentFixture<UserChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
