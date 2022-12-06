import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowStockItemsPage } from './low-stock-items.page';

describe('LowStockItemsPage', () => {
  let component: LowStockItemsPage;
  let fixture: ComponentFixture<LowStockItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowStockItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowStockItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
