import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchUserComponent } from './search-user.component';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  const mockCustId = 'aaa-bbb-ccc';
  const mockStartDate = '01-01-1990';
  const mockEndDate = '02-02-1990';

  const snapshotDataMock = {
    "id": "order-1",
    "recipient": {
      "name": "John Smith",
      "email": "j.smith@notgmail.com"
    },
    "created_at": "2018-11-01T09:42:30Z",
    "items": [
      {
        "id": "item-1",
        "name": "Supersoaker 3000",
        "quantity": 2,
        "total_price": {
          "currency": "EUR",
          "amount": "24.33"
        }
      },
      {
        "id": "item-2",
        "name": "Nunchucks XXX",
        "quantity": 1,
        "total_price": {
          "currency": "EUR",
          "amount": "39.99"
        }
      }
    ],
    "delivery": {
      "courier": "DPP",
      "method": "Express"
    },
    "charge_customer": {
      "currency": "EUR",
      "total_price": "18.00"
    }
  };
  const snapshotOrderMock = {
    snapshot: {
      url: [{path:'order'}],
      data: snapshotDataMock,
      params: {
        custId: mockCustId,
        startDate: mockStartDate,
        endDate: mockEndDate
      }
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: snapshotOrderMock  }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
