import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarSubModelComponent } from './car-sub-model.component';

describe('CarSubModelComponent', () => {
  let component: CarSubModelComponent;
  let fixture: ComponentFixture<CarSubModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSubModelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarSubModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
