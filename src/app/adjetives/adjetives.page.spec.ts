import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdjetivesPage } from './adjetives.page';

describe('AdjetivesPage', () => {
  let component: AdjetivesPage;
  let fixture: ComponentFixture<AdjetivesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjetivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
