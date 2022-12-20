import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmCoreComponent } from './om-core.component';

describe('OmCoreComponent', () => {
  let component: OmCoreComponent;
  let fixture: ComponentFixture<OmCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
