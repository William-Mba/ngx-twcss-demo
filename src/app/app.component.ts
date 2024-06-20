import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Badge,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  PrimaryButton,
  SecondaryButton,
  SoftButton,
} from 'ngx-twcss';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PrimaryButton,
    SecondaryButton,
    SoftButton,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    Badge,
  ],
  template: `
    <div class="flex gap-4 p-4 pb-1 font-bold text-xl">Primary buttons</div>
    <div class="flex gap-4 p-4">
      <nxt-primary-button size='sm' (click)='showText()' (dblclick)='resetText()'>
        Small {{ text }}
      </nxt-primary-button>
      <nxt-primary-button (click)='showText()' (dblclick)='resetText()'>
        Medium {{ text }}
      </nxt-primary-button>
      <nxt-primary-button size='lg' (click)='showText()' (dblclick)='resetText()'>
        Large {{ text }}
      </nxt-primary-button>
    </div>
    <div class="flex gap-4 p-4 pb-1 font-bold text-xl">Secondary buttons</div>
    <div class="flex gap-4 p-4">
      <nxt-secondary-button size='sm' (click)='showText()' (dblclick)='resetText()'>
        Small {{ text }}
      </nxt-secondary-button>
      <nxt-secondary-button (click)='showText()' (dblclick)='resetText()'>
        Medium {{ text }}
      </nxt-secondary-button>
      <nxt-secondary-button size='lg' (click)='showText()' (dblclick)='resetText()'>
        Large {{ text }}
      </nxt-secondary-button>
    </div>
    <div class="flex gap-4 p-4 pb-1 font-bold text-xl">Soft buttons</div>
    <div class="flex gap-4 p-4">
      <nxt-soft-button size='sm'>
        Small {{ text }}
      </nxt-soft-button>
      <nxt-soft-button (click)='showText()' (dblclick)='resetText()'>
        Medium {{ text }}
      </nxt-soft-button>
      <nxt-soft-button size='lg' (click)='showText()' (dblclick)='resetText()'>
        Large {{ text }}
      </nxt-soft-button>
    </div>
    
    <div class="flex gap-4 p-4 pb-1 font-bold text-xl">Dropdowns</div>
    <div class="inline-flex gap-4 p-4">    
      <nxt-dropdown>
        Save and close
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="currentColor"
          viewBox="0 -960 960 960">
          <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
        </svg>
        <nxt-dropdown-item *ngFor="let item of ['Save', 'Save as draft', 'Cancel']">
          {{ item }}
        </nxt-dropdown-item>
      </nxt-dropdown>

      <nxt-dropdown position='top-8' className="rounded-full px-1 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path
            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
        </svg>
        <nxt-dropdown-item *ngFor="let item of ['Save', 'Save as draft', 'Cancel']">
          {{ item }}
        </nxt-dropdown-item>
      </nxt-dropdown>      
    </div>
    <div class="flex gap-4 p-4 pb-1 font-bold text-xl">Badges</div>
    <div class="grid pl-3">

      <div class="flex gap-4 p-4 pb-1 font-semibold text-sm">Flat</div>
      <div class="inline-flex gap-4 p-4 flex-wrap">
        <nxt-badge className="bg-blue-600 text-blue-700">Badge</nxt-badge>
        <nxt-badge className="bg-yellow-600 text-yellow-800">Badge</nxt-badge>
        <nxt-badge className="bg-red-600 text-red-700">Badge</nxt-badge>
        <nxt-badge className="bg-pink-600 text-pink-600">Badge</nxt-badge>
        <nxt-badge className="bg-green-600 text-green-700">Badge</nxt-badge>
      </div>

      <div class="flex gap-4 p-4 pb-1 font-semibold text-sm">Rounded with dot and border</div>
      <div class="inline-flex gap-4 p-4">      
        <nxt-badge className="bg-blue-600 text-blue-600 ring-1 ring-blue-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
            <path
              d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
          </svg>
          Badge
        </nxt-badge>
        <nxt-badge className="bg-yellow-800 text-yellow-800 ring-1 ring-yellow-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
            <path
              d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
          </svg>
          Badge
        </nxt-badge>
        <nxt-badge className="bg-red-700 text-red-700 ring-1 ring-red-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
            <path
              d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
          </svg>
          Badge
        </nxt-badge>        
        <nxt-badge className="bg-pink-800 text-pink-800 ring-1 ring-pink-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
            <path
              d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
          </svg>
          Badge
        </nxt-badge>
        <nxt-badge className="bg-green-700 text-green-700 ring-1 ring-green-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor">
            <path
              d="M480-200q-117 0-198.5-81.5T200-480q0-117 81.5-198.5T480-760q117 0 198.5 81.5T760-480q0 117-81.5 198.5T480-200Z" />
          </svg>
          Badge
        </nxt-badge>     
      </div>

      <div class="flex gap-4 p-4 pb-1 font-semibold text-sm">Width action button</div>
      <div class="inline-flex gap-4 p-4 flex-wrap">
        <nxt-badge className="bg-blue-600 text-blue-700 ring-blue-300 rounded-none">
          Badge
          <button class="hover:bg-blue-600 hover:bg-opacity-20 size-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
        </nxt-badge>
        <nxt-badge className="bg-yellow-600 text-yellow-700 ring-yellow-300 rounded-none">
          Badge
          <button class="hover:bg-yellow-600 hover:bg-opacity-20 size-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
        </nxt-badge>
        <nxt-badge className="bg-red-600 text-red-700 ring-red-300 rounded-none">
          Badge
          <button class="hover:bg-red-600 hover:bg-opacity-20 size-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
        </nxt-badge>        
        <nxt-badge className="bg-pink-600 text-pink-700 ring-pink-300 rounded-none">
          Badge
          <button class="hover:bg-pink-600 hover:bg-opacity-20 size-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
        </nxt-badge>
        <nxt-badge className="bg-green-600 text-green-700 ring-green-300 rounded-none">
          Badge
          <button class="hover:bg-green-600 hover:bg-opacity-20 size-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
        </nxt-badge>
      </div>
    </div>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'demo';
  text = '';

  showText() {
    this.text = 'Text';
  }

  resetText() {
    this.text = '';
  }
}