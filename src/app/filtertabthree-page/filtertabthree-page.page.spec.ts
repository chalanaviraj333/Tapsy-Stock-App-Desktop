import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltertabthreePagePage } from './filtertabthree-page.page';

describe('FiltertabthreePagePage', () => {
  let component: FiltertabthreePagePage;
  let fixture: ComponentFixture<FiltertabthreePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltertabthreePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltertabthreePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
