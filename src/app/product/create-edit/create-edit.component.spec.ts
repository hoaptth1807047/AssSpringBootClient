import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditProductComponent } from './create-edit.component';

describe('CreateEditComponent', () => {
  let component: CreateEditProductComponent;
  let fixture: ComponentFixture<CreateEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
