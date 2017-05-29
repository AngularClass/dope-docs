import { Component, Inject, ViewEncapsulation } from '@angular/core'
import { ENTRY_MARKDOWN } from '../services'
@Component({
  selector: 'ui-guide-components-view',
  template: `
    <div class="entry-component">
      <dope-docs-markdown [markdown]="entryMarkdown"></dope-docs-markdown>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    @media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  .entry-component a,
  .entry-component a:visited {
    text-decoration: underline;
  }

  .entry-component a[href]:after {
    content: " (" attr(href) ")";
  }

  .entry-component abbr[title]:after {
    content: " (" attr(title) ")";
  }

  .entry-component a[href^="#"]:after,
  .entry-component a[href^="javascript:"]:after {
    content: "";
  }

  .entry-component pre,
  .entry-component blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  .entry-component thead {
    display: table-header-group;
  }

  .entry-component tr,
  .entry-component img {
    page-break-inside: avoid;
  }

  .entry-component img {
    max-width: 100% !important;
  }

  .entry-component p,
  .entry-component h2,
  .entry-component h3 {
    orphans: 3;
    widows: 3;
  }

  .entry-component h2,
  .entry-component h3 {
    page-break-after: avoid;
  }
}

.entry-component {
  line-height: 1.85;
}

.entry-component p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}

.entry-component h1,
.entry-component h2,
.entry-component h3,
.entry-component h4 {
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
}

.entry-component h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

.entry-component h2 {
  font-size: 2.827rem;
}

.entry-component h3 {
  font-size: 1.999rem;
}

.entry-component h4 {
  font-size: 1.414rem;
}

.entry-component h5 {
  font-size: 1.121rem;
}

.entry-component h6 {
  font-size: .88rem;
}

.entry-component small {
  font-size: .707em;
}

/* https://github.com/mrmrs/fluidity */

.entry-component img,
.entry-component canvas,
.entry-component iframe,
.entry-component video,
.entry-component svg,
.entry-component select,
.entry-component textarea {
  max-width: 100%;
}

.entry-component {
  color: #444;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 300;
  padding: 2.5rem;
  margin: 0px;
}

.entry-component img {
  border-radius: 50%;
  height: 200px;
  margin: 0 auto;
  width: 200px;
}

.entry-component a,
.entry-component a:visited {
  color: #3498db;
}

.entry-component a:hover,
.entry-component a:focus,
.entry-component a:active {
  color: #2980b9;
}

.entry-component pre {
  background-color: #fafafa;
  padding: 1rem;
  text-align: left;
}

.entry-component blockquote {
  margin: 0;
  border-left: 5px solid #7a7a7a;
  font-style: italic;
  padding: 1.33em;
  text-align: left;
}

.entry-component ul,
.entry-component ol,
.entry-component li {
  text-align: left;
}

.entry-component p {
  color: #777;
}
  `]
})
export class ComponentsView {
  constructor(@Inject(ENTRY_MARKDOWN) public entryMarkdown: string) {}
}
