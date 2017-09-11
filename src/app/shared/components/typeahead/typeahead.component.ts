import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SymbolsService } from '../../services/symbols.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnChanges {
  @Input('closeSug') closeSug: boolean;
  @Output() chosenToken: EventEmitter<string> = new EventEmitter<string>();
  query: string;
  tokens: string[];
  filteredList: string[];

  constructor(private symbolsService: SymbolsService) {
    this.tokens = this.symbolsService.tokens;
    this.filteredList = [];
    this.query = '';
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.closeSug.firstChange) {
      if (changes.closeSug.previousValue !== changes.closeSug.currentValue) {
        this.filteredList = [];
      }
    }
  }

  filter() {
    if (this.query !== '') {
      this.filteredList = this.tokens.filter((token) => {
        return token.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      });
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    const sym = this.query.split(/([a-zA-Z]+)/);
    this.chosenToken.emit(sym[sym.length - 2]);
    this.filteredList = [];
  }

}
