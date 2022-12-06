import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemoteshellPagePage } from './remoteshell-page.page';

describe('RemoteshellPagePage', () => {
  let component: RemoteshellPagePage;
  let fixture: ComponentFixture<RemoteshellPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteshellPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteshellPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
