import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'playlist-form',
  template: `
   <div class="card">
  <div class="card-block">
    <h4 class="card-title">Playlista</h4>
    <p class="card-text">Opis playlisty</p>
  </div>
    <div class="card-block">
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
        <button class="btn btn-success float-xs-rigth" (click)="save($event)">SAVE</button>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistFormComponent implements OnInit {

  @Input()
  playlist;

  constructor() { }

  ngOnInit() {
  }

}
