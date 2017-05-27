import { Component, Input, ViewEncapsulation } from '@angular/core'
import * as marked from 'marked';

@Component({
  selector: 'dope-docs-markdown',
  template: `
    <div [innerHTML]="parsedMarkdown"></div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MarkdownParser {
  @Input() markdown: string = ''
  parsedMarkdown: string;

  ngOnChanges() {
    const md = marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    this.parsedMarkdown = md.parse(this.markdown || '');
  }
}
