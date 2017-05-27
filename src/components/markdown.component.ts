import { Component, Inject, ViewEncapsulation } from '@angular/core'
import { ENTRY_MARKDOWN } from '../services'
@Component({
  selector: 'ui-guide-components-view',
  template: `
    <div class="entryComponent">
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

  .entryComponent a,
  .entryComponent a:visited {
    text-decoration: underline;
  }

  .entryComponent a[href]:after {
    content: " (" attr(href) ")";
  }

  .entryComponent abbr[title]:after {
    content: " (" attr(title) ")";
  }

  .entryComponent a[href^="#"]:after,
  .entryComponent a[href^="javascript:"]:after {
    content: "";
  }

  .entryComponent pre,
  .entryComponent blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  .entryComponent thead {
    display: table-header-group;
  }

  .entryComponent tr,
  .entryComponent img {
    page-break-inside: avoid;
  }

  .entryComponent img {
    max-width: 100% !important;
  }

  .entryComponent p,
  .entryComponent h2,
  .entryComponent h3 {
    orphans: 3;
    widows: 3;
  }

  .entryComponent h2,
  .entryComponent h3 {
    page-break-after: avoid;
  }
}

.entryComponent {
  line-height: 1.85;
}

.entryComponent p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}

.entryComponent h1,
.entryComponent h2,
.entryComponent h3,
.entryComponent h4 {
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
}

.entryComponent h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

.entryComponent h2 {
  font-size: 2.827rem;
}

.entryComponent h3 {
  font-size: 1.999rem;
}

.entryComponent h4 {
  font-size: 1.414rem;
}

.entryComponent h5 {
  font-size: 1.121rem;
}

.entryComponent h6 {
  font-size: .88rem;
}

.entryComponent small {
  font-size: .707em;
}

/* https://github.com/mrmrs/fluidity */

.entryComponent img,
.entryComponent canvas,
.entryComponent iframe,
.entryComponent video,
.entryComponent svg,
.entryComponent select,
.entryComponent textarea {
  max-width: 100%;
}

.entryComponent {
  color: #444;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 300;
  margin: 6rem auto 1rem;
  text-align: center;
}

.entryComponent img {
  border-radius: 50%;
  height: 200px;
  margin: 0 auto;
  width: 200px;
}

.entryComponent a,
.entryComponent a:visited {
  color: #3498db;
}

.entryComponent a:hover,
.entryComponent a:focus,
.entryComponent a:active {
  color: #2980b9;
}

.entryComponent pre {
  background-color: #fafafa;
  padding: 1rem;
  text-align: left;
}

.entryComponent blockquote {
  margin: 0;
  border-left: 5px solid #7a7a7a;
  font-style: italic;
  padding: 1.33em;
  text-align: left;
}

.entryComponent ul,
.entryComponent ol,
.entryComponent li {
  text-align: left;
}

.entryComponent p {
  color: #777;
}
  `]
})
export class ComponentsView {
  constructor(@Inject(ENTRY_MARKDOWN) public entryMarkdown: string) { }
}
