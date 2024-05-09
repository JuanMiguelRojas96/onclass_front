import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PaginationProps {
  sizeContent: number;
  sizePage: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pages: number[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  @Input() paginationProps:PaginationProps = {
    sizeContent: 0,
    sizePage: 0
  }
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

    this.calculatePages();
    this.pageChanged.emit(this.currentPage - 1);
  }


  calculatePages(){

    this.totalPages = Math.ceil(this.paginationProps.sizeContent / Math.max(1, this.paginationProps.sizePage) );

    this.pages = [];
    const maxPagesToShow = 3;
    
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(startPage + maxPagesToShow - 1, this.totalPages);
  
    if (endPage === this.totalPages) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    } else if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
    
    if (startPage > 1) {
      if (startPage > 2) {
        this.pages.unshift(-1);
      }
      this.pages.unshift(1);
    }
    
    if (endPage < this.totalPages) {
      if (endPage < this.totalPages - 1) {
        this.pages.push(-1);
      }
      this.pages.push(this.totalPages);
    }
  }

  onPageClick(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(page - 1);
    this.calculatePages();
  }

  onNextPageClick(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage - 1);
      this.calculatePages();
    }
  }

  onPrevPageClick(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage - 1);
      this.calculatePages();
    }
  }

  ngOnDestroy(): void {

    this.pages = [];

  }
}
