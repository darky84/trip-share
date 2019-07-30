import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

export const ADD_ROW = 'ADD row';
export const UPDATE_ROW = 'UPDATE row';
export const DELETE_ROW = 'DELETE row';

export class AddRowEvent implements Action {
  readonly type = ADD_ROW;
  constructor() { };
}

export class UpadateRowEvent implements Action {
  readonly type = UPDATE_ROW;
  constructor(payload: Event[]) { };
}

export class DeleteRowEvent implements Action {
  readonly type = DELETE_ROW;
  constructor(payload: Event[]) { };
}

export type Action = AddRowEvent | DeleteRowEvent | UpadateRowEvent;