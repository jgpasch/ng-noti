import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SubscriptionService } from './subscription.service';

const mockResponse = {
  data: [
    { token: 'ETH', percent: 5, minVal: 100, maxVal: 200, minMaxPercentChange: 10, active: true, owner: 'John Paschal'},
    { token: 'BTC', percent: 12, minVal: 100, maxVal: 200, minMaxPercentChange: 10, active: true, owner: 'John Paschal'},
    { token: 'ICN', percent: 12, minVal: 100, maxVal: 200, minMaxPercentChange: 10, active: true, owner: 'John Paschal'},
    { token: 'DGB', percent: 12, minVal: 100, maxVal: 200, minMaxPercentChange: 10, active: true, owner: 'John Paschal'},
    { token: 'MLN', percent: 5, minVal: 100, maxVal: 200, minMaxPercentChange: 10, active: false, owner: 'John Paschal'}
  ]
};

describe('SubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      providers: [SubscriptionService, { provide: XHRBackend, useClass: MockBackend } ]
    });
  });

  it('should be created', inject([SubscriptionService], (service: SubscriptionService) => {
    expect(service).toBeTruthy();
  }));

  // tslint:disable-next-line:max-line-length
  it('should return an observable<array<subscription>>', inject([SubscriptionService, XHRBackend], (service: SubscriptionService, backend: MockBackend) => {
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getAllSubscriptions().subscribe(subs => {
      const data = subs.data;
      // expect(subs).toBeTruthy();
      expect(data.length).toBe(5);
      expect(data[0].token).toBe('ETH');
      expect(data[1].token).toBe('BTC');
      expect(data[2].token).toBe('ICN');
      expect(data[3].token).toBe('DGB');
      expect(data[4].token).toBe('MLN');
    });
  }));

});
