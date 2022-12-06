import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubCarModelPagePage } from './sub-car-model-page.page';

describe('SubCarModelPagePage', () => {
  let component: SubCarModelPagePage;
  let fixture: ComponentFixture<SubCarModelPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCarModelPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubCarModelPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
