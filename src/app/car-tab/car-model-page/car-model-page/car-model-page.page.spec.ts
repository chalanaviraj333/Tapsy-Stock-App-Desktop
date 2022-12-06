import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarModelPagePage } from './car-model-page.page';

describe('CarModelPagePage', () => {
  let component: CarModelPagePage;
  let fixture: ComponentFixture<CarModelPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarModelPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
