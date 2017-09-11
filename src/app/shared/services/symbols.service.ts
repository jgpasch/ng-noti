import { Injectable } from '@angular/core';
import symbols from '../components/typeahead/symbols';

export class SymbolsService {
  tokens: string[];

  constructor() {
    this.tokens = [];
    this.getTokens();
  }

  getTokens() {
    Object.keys(symbols).forEach(key => {
      this.tokens.push(key);
    });
  }
}
