import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemotedetailsmodalPage } from './remotedetailsmodal.page';

describe('RemotedetailsmodalPage', () => {
  let component: RemotedetailsmodalPage;
  let fixture: ComponentFixture<RemotedetailsmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemotedetailsmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemotedetailsmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
