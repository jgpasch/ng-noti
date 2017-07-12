import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { SidebarService } from '../../shared/services/sidebar.service';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing'


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ],
      providers: [ SidebarService, { provide: AuthService, useClass: MockAuthService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(HeaderComponent,
    { set:
      {
        providers: [ { provide: AuthService, useClass: MockAuthService } ]
      }
    })
    .createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should logout button when user is logged in', inject([AuthService], (service: AuthService) => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logout-text').text).toBe('Logout, John');
  }));
});

class MockAuthService {
  getUsername() {
    return 'John'
  }
}
