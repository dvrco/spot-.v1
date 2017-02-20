import { Component, OnInit } from '@angular/core';

@Component({
   
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  selected =null;
  edited = {

  }

  mode = "none";

  createNew(){
    this.mode = "edit";
    var newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

edit(playlist){
  this.mode = "edit";
  this.edited = playlist;
  this.selected = playlist;

}


select(playlist){
  if(playlist !== this.selected)
  this.selected = playlist;
  this.mode = "selected";
}

  playlists = [
  
     {
      name: 'Angular greatest hits ',
      tracks: 2,
      color: '#FF0000',
      favourite: true,
    },

    {
      name: 'The best off the year',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    }

  ]

  save(event){
    console.log('Zapisano', event)
  }





}
