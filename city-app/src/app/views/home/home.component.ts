import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- <section class="container content"> -->
    <form role="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search Here" />
        <button type="submit" class="primary">
          <i class="bi bi-search me-2"></i> Search
        </button>
      </div>
    </form>
    <!-- </section> -->
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
