import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KdXhorsepagePage } from './kd-xhorsepage.page';

describe('KdXhorsepagePage', () => {
  let component: KdXhorsepagePage;
  let fixture: ComponentFixture<KdXhorsepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdXhorsepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KdXhorsepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
