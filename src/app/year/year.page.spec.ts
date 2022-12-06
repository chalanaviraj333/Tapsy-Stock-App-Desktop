import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YearPage } from './year.page';

describe('YearPage', () => {
  let component: YearPage;
  let fixture: ComponentFixture<YearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
