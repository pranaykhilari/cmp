import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerContent = '';

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent});
  }

}
