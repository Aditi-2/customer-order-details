import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiRequestService } from './api-request.service';

describe('ApiRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [ApiRequestService]
    });
  });

  it('should be created', inject([ApiRequestService], (service: ApiRequestService) => {
    expect(service).toBeTruthy();
  }));
});
