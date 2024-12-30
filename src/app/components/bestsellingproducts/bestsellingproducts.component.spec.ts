import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellingproductsComponent } from './bestsellingproducts.component';

describe('BestsellingproductsComponent', () => {
  let component: BestsellingproductsComponent;
  let fixture: ComponentFixture<BestsellingproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestsellingproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
