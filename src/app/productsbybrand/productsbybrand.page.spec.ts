import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsbybrandPage } from './productsbybrand.page';

describe('ProductsbybrandPage', () => {
  let component: ProductsbybrandPage;
  let fixture: ComponentFixture<ProductsbybrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsbybrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsbybrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
