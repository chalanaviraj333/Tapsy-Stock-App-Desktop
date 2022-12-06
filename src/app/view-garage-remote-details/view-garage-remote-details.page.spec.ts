import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewGarageRemoteDetailsPage } from './view-garage-remote-details.page';

describe('ViewGarageRemoteDetailsPage', () => {
  let component: ViewGarageRemoteDetailsPage;
  let fixture: ComponentFixture<ViewGarageRemoteDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGarageRemoteDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGarageRemoteDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
