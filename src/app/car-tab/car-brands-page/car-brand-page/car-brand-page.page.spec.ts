import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarBrandPagePage } from './car-brand-page.page';

describe('CarBrandPagePage', () => {
  let component: CarBrandPagePage;
  let fixture: ComponentFixture<CarBrandPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBrandPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarBrandPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
