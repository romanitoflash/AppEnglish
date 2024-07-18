import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.page.html',
  styleUrls: ['./new-home.page.scss'],
})
export class NewHomePage implements OnInit {
 constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchVerbs();
  }

  verbs: any[] = [];
  verb: any = [];
  
  currentPage: number = 1;
  totalPages: number=1;
  isModalOpen = false;
  modelValue: string="";
  
  async canDismiss(data?: any, role?: string) {
    console.log("click modal");
    return role !== 'gesture';
  }
  setOpen(isOpen: boolean, verbR:any[] = []) {
    this.isModalOpen = isOpen;
    this.verb=verbR;
    
    console.log('View verb:', this.verb);
  } 

  onModelChange(value: string) {
    
    if(value.length>=2){
      console.log('Model value changed: buscar ', value);
      this.getVerbsSearch(value);
    }else {
      console.log('Model value changed: no busca', value);
      this.fetchVerbs();
    }
    
  }
  fetchVerbs(page: number = 1) {
    this.apiService.getVerbs(page).subscribe(
      response => {
        this.verbs = response.data.data; // Accede a la lista de verbos
        this.currentPage = response.data.current_page;
        this.totalPages = response.data.last_page;
        console.log(this.verbs);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
  getVerbsSearch(simpler_fom:string =''){
    this.apiService.getSearchVerb(simpler_fom).subscribe(
      response=> {
        this.verbs = response.data
        this.currentPage=0;
        this.totalPages=0;
        console.log(this.verbs);
      },
      error => {
        console.error('Error data search');
      }
      
    );
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.fetchVerbs(this.currentPage + 1);
    }
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.fetchVerbs(this.currentPage - 1);
    }
  }
 
}
