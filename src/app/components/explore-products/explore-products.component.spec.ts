import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductsComponent } from './explore-products.component';

describe('ExploreProductsComponent', () => {
  let component: ExploreProductsComponent;
  let fixture: ComponentFixture<ExploreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
