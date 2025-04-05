import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuxuryBuildingPage } from './luxury-building.page';

describe('LuxuryBuildingPage', () => {
  let component: LuxuryBuildingPage;
  let fixture: ComponentFixture<LuxuryBuildingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuxuryBuildingPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuxuryBuildingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 