import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowStockModalPage } from './low-stock-modal.page';

describe('LowStockModalPage', () => {
  let component: LowStockModalPage;
  let fixture: ComponentFixture<LowStockModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowStockModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowStockModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
