import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SubscriptionDeletedService } from '../../services/subscription-deleted.service';

@Component({
  selector: 'app-card-top-section',
  templateUrl: './card-top-section.component.html',
  styleUrls: ['./card-top-section.component.scss']
})
export class CardTopSectionComponent implements OnInit {
  @Input() active: boolean;
  @Input() id: number;
  @Input() token: string;
  @Output() toggleActive: EventEmitter<number> = new EventEmitter<number>();
  @Output() editSub: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialog: MdDialog, private deleteSubService: SubscriptionDeletedService) { }

  activeClicked() {
    this.toggleActive.emit(this.id);
  }

  editSubClicked() {
    this.editSub.emit(true);
  }

  deleteClicked() {
    const ref = this.dialog.open(ConfirmComponent);
    ref.afterClosed().subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        console.log('ok well delete this one then');
        this.deleteSubService.deleteSub(this.id);
      }
    });
  }

  ngOnInit() {
  }

}
