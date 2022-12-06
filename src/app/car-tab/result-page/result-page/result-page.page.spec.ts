import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultPagePage } from './result-page.page';

describe('ResultPagePage', () => {
  let component: ResultPagePage;
  let fixture: ComponentFixture<ResultPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
