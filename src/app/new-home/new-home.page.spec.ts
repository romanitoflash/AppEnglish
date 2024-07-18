import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewHomePage } from './new-home.page';

describe('NewHomePage', () => {
  let component: NewHomePage;
  let fixture: ComponentFixture<NewHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
