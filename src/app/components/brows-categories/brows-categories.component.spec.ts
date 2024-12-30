import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsCategoriesComponent } from './brows-categories.component';

describe('BrowsCategoriesComponent', () => {
  let component: BrowsCategoriesComponent;
  let fixture: ComponentFixture<BrowsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
