
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../service/commande.service';
import { Commande } from '../../Models/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent  implements OnInit{
  Commandes: Commande[] = [];
  constructor(private cmService:CommandeService){}
  ngOnInit(): void {
    this. findAllCommands();
  }
  findAllCommands() {
    this.cmService.getAllCommand().subscribe((Commandes: Commande[]) => {
      this.Commandes = Commandes;
    });
}}
