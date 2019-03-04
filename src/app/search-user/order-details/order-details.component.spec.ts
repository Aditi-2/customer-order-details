import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { OrderDetailsComponent } from './order-details.component';
import { DemoMaterialModule } from '../../../material-module';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
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
      declarations: [ OrderDetailsComponent ],
      imports: [
        DemoMaterialModule,
        RouterModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: snapshotOrderMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
