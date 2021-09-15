import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdadeComponent } from './product-updade.component';

describe('ProductUpdadeComponent', () => {
  let component: ProductUpdadeComponent;
  let fixture: ComponentFixture<ProductUpdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
