import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnotesPage } from './addnotes.page';

describe('AddnotesPage', () => {
  let component: AddnotesPage;
  let fixture: ComponentFixture<AddnotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
