
import { Component, ElementRef, Inject, Renderer2, Output, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Dir } from '@angular/cdk/bidi';

import { getDirection, setDirection } from '../../utilities/direction';

import { GitHubService } from '../../services/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dir: 'ltr' | 'rtl' = getDirection();

  versions: string[] = [];

  get version(): string {
    return location.pathname.split('/')[2] || 'LOCAL';
  }

  constructor(
    private _renderer: Renderer2,
    private _githubService: GitHubService,
    private _dir: Dir,
    @Inject(DOCUMENT) private _document: any,
  ) {
    this._dir.dir = this.dir;
  }

  async ngOnInit(): Promise<void> {
    this.versions = await this._githubService.getVersionDirectories().toPromise();
  }

  changeDir(dir: 'ltr' | 'rtl'): void {
    this._renderer.setAttribute(this._document.querySelector('html'), 'dir', dir);
    this._dir.dir = dir;
    setDirection(dir);
  }

  get activeTheme(): string {
    return localStorage.getItem('theme');
  }
  theme(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
