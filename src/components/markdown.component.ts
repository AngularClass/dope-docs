import { Component, Input, ViewEncapsulation } from '@angular/core'
import * as marked from 'marked';



@Component({
  selector: 'dope-docs-markdown',
  template: `
    <div [innerHTML]="parsedMarkdown"></div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent {
  @Input() markdown: string = ''
  md: any
  parsedMarkdown: string;

  constructor() {
    // hijack the renderer
    const renderer = new marked.Renderer();
    
    // nest code block within pre tags
    renderer.code = (code, lang) => {
      return `<pre><code>${code}</code></pre>`;
    }

    // nest inline code block within pre tags
    renderer.codespan = (code) => {
      return `<pre><code>${code}</code></pre>`;
    }
    this.md = marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      renderer: renderer
    });
  }

  ngOnChanges() {
    this.parsedMarkdown = this.md.parse(this.markdown || '');
  }
}
