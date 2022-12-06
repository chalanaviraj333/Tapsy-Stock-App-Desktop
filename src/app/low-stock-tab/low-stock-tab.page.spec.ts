import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowStockTabPage } from './low-stock-tab.page';

describe('LowStockTabPage', () => {
  let component: LowStockTabPage;
  let fixture: ComponentFixture<LowStockTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowStockTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowStockTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
