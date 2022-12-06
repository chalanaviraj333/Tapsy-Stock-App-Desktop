import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltertabtwopagePage } from './filtertabtwopage.page';

describe('FiltertabtwopagePage', () => {
  let component: FiltertabtwopagePage;
  let fixture: ComponentFixture<FiltertabtwopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltertabtwopagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltertabtwopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
