import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
        <div>
          <div class="form-group row">
          <label>Name:</label>
        <input type="text" [(ngModel)]="playlist.name" class="form-control">
      </div>
      <div class="form-group row">
          <label>Tracks:</label>
        <input type="text" [value]="playlist.tracks + ' utworow'" disabled class="form-control">
      </div>
      <div class="form-group row">
          <label>Color:</label> 
        <input type="color" [(ngModel)]="playlist.color">
      </div>
      <div class="form-group row">
          <label>
            <input type="checkbox" [(ngModel)]="playlist.favourite" >Favourite
          </label>
      </div>
      <div class="form-group row">
        <button class="btn btn-success float-xs-rigth" (click)="save(playlist)">SAVE</button>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  @Output('saved')
  onSave = new EventEmitter();

  save(playlist){
    this.onSave.emit(playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}
