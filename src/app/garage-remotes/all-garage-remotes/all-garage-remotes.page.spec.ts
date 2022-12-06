import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllGarageRemotesPage } from './all-garage-remotes.page';

describe('AllGarageRemotesPage', () => {
  let component: AllGarageRemotesPage;
  let fixture: ComponentFixture<AllGarageRemotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGarageRemotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllGarageRemotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
