import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { SidebarService } from '../../shared/services/sidebar.service';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing'
import { MdDialogModule } from '@angular/material';
import { MdDialog } from '@angular/material';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mdDialogSpy = jasmine.createSpy('MdDialogRef')


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HeaderComponent ],
      providers: [ SidebarService, { provide: AuthService, useClass: MockAuthService }, { provide: MdDialog, useClass: mdDialogSpy } ]
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

  it('should show logout button when user is logged in', inject([AuthService], (service: AuthService) => {
    const compiled = fixture.debugElement.nativeElement;
    expect(fixture.debugElement.query(By.css('.glyphicon.glyphicon-log-out'))).toBeTruthy();
  }));
});

class MockAuthService {
  getUsername() {
    return 'John'
  }
}
