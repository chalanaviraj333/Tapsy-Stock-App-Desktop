import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultSubModelPage } from './result-sub-model.page';

describe('ResultSubModelPage', () => {
  let component: ResultSubModelPage;
  let fixture: ComponentFixture<ResultSubModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSubModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultSubModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
