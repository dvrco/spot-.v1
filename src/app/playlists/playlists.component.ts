import { Component, OnInit } from '@angular/core';

@Component({
   
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  selected =null;
  edited = {

  }

  mode = "none";

  createNew(){
    this.mode = "edit";
    var newPlaylist = { 
      name: '',
      tracks: 0,
      color: '#FF0000',
      favourite: false
    };
    this.selected = newPlaylist;
    this.edited = Object.assign({}, newPlaylist);
  }

edit(playlist){
  this.mode = "edit";
  this.edited = Object.assign({}, playlist);
  this.selected = playlist;

}


select(playlist){
  if(playlist !== this.selected)
  this.selected = playlist;
  this.mode = "selected";
}

  playlists = [
  
     {
      id: 1,
      name: 'Angular greatest hits ',
      tracks: 2,
      color: '#FF0000',
      favourite: true,
    },

    {
      id: 2,
      name: 'The best off the year',
      tracks: 23,
      color: '#0000FF',
      favourite: false,
    }

  ]

  save(playlist){
    if(playlist.id){
      let index = this.playlists.findIndex((old_playlist)=>(
          old_playlist === playlist.id
      ))
      this.playlists.splice(index, 1, playlist)
    }else{
       playlist.id = Date.now();
       this.playlists.push(playlist);
    }
  }

 constructor() { }

  ngOnInit() {
  }



}
