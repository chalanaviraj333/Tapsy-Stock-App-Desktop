import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarYearModelComponent } from './car-year-model.component';

describe('CarYearModelComponent', () => {
  let component: CarYearModelComponent;
  let fixture: ComponentFixture<CarYearModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarYearModelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarYearModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
