import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsfeedComponent } from './update-newsfeed.component';

describe('UpdateNewsfeedComponent', () => {
  let component: UpdateNewsfeedComponent;
  let fixture: ComponentFixture<UpdateNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
