/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { HTMLDataProvider } from '../dataProvider.js';
import { HTML5_TAGS } from './html5Tags.js';
import { HTML5_EVENTS } from './html5Events.js';
import { ARIA_ATTRIBUTES } from './html5Aria.js';
export function getHTML5DataProvider() {
    return new HTMLDataProvider('html5', {
        version: 1,
        tags: HTML5_TAGS,
        globalAttributes: HTML5_GLOBAL_ATTRIBUTES.concat(HTML5_EVENTS),
        valueSets: HTML5_VALUE_MAP
    });
}
export var HTML5_GLOBAL_ATTRIBUTES = ARIA_ATTRIBUTES.concat([
    {
        name: 'accesskey'
    },
    {
        name: 'class'
    },
    {
        name: 'contenteditable',
        valueSet: 'b'
    },
    {
        name: 'contextmenu'
    },
    {
        name: 'dir',
        valueSet: 'd'
    },
    {
        name: 'draggable',
        valueSet: 'b'
    },
    {
        name: 'dropzone'
    },
    {
        name: 'hidden',
        valueSet: 'v'
    },
    {
        name: 'id'
    },
    {
        name: 'itemid'
    },
    {
        name: 'itemprop'
    },
    {
        name: 'itemref'
    },
    {
        name: 'itemscope',
        valueSet: 'v'
    },
    {
        name: 'itemtype'
    },
    {
        name: 'lang'
    },
    {
        name: 'role',
        valueSet: 'roles'
    },
    {
        name: 'spellcheck',
        valueSet: 'b'
    },
    {
        name: 'style'
    },
    {
        name: 'tabindex'
    },
    {
        name: 'title'
    },
    {
        name: 'translate',
        valueSet: 'y'
    }
]);
export var HTML5_VALUE_MAP = [
    {
        name: 'b',
        values: [
            {
                name: 'true'
            },
            {
                name: 'false'
            }
        ]
    },
    {
        name: 'u',
        values: [
            {
                name: 'true'
            },
            {
                name: 'false'
            },
            {
                name: 'undefined'
            }
        ]
    },
    {
        name: 'o',
        values: [
            {
                name: 'on'
            },
            {
                name: 'off'
            }
        ]
    },
    {
        name: 'y',
        values: [
            {
                name: 'yes'
            },
            {
                name: 'no'
            }
        ]
    },
    {
        name: 'w',
        values: [
            {
                name: 'soft'
            },
            {
                name: 'hard'
            }
        ]
    },
    {
        name: 'd',
        values: [
            {
                name: 'ltr'
            },
            {
                name: 'rtl'
            },
            {
                name: 'auto'
            }
        ]
    },
    {
        name: 'm',
        values: [
            {
                name: 'GET'
            },
            {
                name: 'POST'
            },
            {
                name: 'dialog'
            }
        ]
    },
    {
        name: 'fm',
        values: [
            {
                name: 'GET'
            },
            {
                name: 'POST'
            }
        ]
    },
    {
        name: 's',
        values: [
            {
                name: 'row'
            },
            {
                name: 'col'
            },
            {
                name: 'rowgroup'
            },
            {
                name: 'colgroup'
            }
        ]
    },
    {
        name: 't',
        values: [
            {
                name: 'hidden'
            },
            {
                name: 'text'
            },
            {
                name: 'search'
            },
            {
                name: 'tel'
            },
            {
                name: 'url'
            },
            {
                name: 'email'
            },
            {
                name: 'password'
            },
            {
                name: 'datetime'
            },
            {
                name: 'date'
            },
            {
                name: 'month'
            },
            {
                name: 'week'
            },
            {
                name: 'time'
            },
            {
                name: 'datetime-local'
            },
            {
                name: 'number'
            },
            {
                name: 'range'
            },
            {
                name: 'color'
            },
            {
                name: 'checkbox'
            },
            {
                name: 'radio'
            },
            {
                name: 'file'
            },
            {
                name: 'submit'
            },
            {
                name: 'image'
            },
            {
                name: 'reset'
            },
            {
                name: 'button'
            }
        ]
    },
    {
        name: 'im',
        values: [
            {
                name: 'verbatim'
            },
            {
                name: 'latin'
            },
            {
                name: 'latin-name'
            },
            {
                name: 'latin-prose'
            },
            {
                name: 'full-width-latin'
            },
            {
                name: 'kana'
            },
            {
                name: 'kana-name'
            },
            {
                name: 'katakana'
            },
            {
                name: 'numeric'
            },
            {
                name: 'tel'
            },
            {
                name: 'email'
            },
            {
                name: 'url'
            }
        ]
    },
    {
        name: 'bt',
        values: [
            {
                name: 'button'
            },
            {
                name: 'submit'
            },
            {
                name: 'reset'
            },
            {
                name: 'menu'
            }
        ]
    },
    {
        name: 'lt',
        values: [
            {
                name: '1'
            },
            {
                name: 'a'
            },
            {
                name: 'A'
            },
            {
                name: 'i'
            },
            {
                name: 'I'
            }
        ]
    },
    {
        name: 'mt',
        values: [
            {
                name: 'context'
            },
            {
                name: 'toolbar'
            }
        ]
    },
    {
        name: 'mit',
        values: [
            {
                name: 'command'
            },
            {
                name: 'checkbox'
            },
            {
                name: 'radio'
            }
        ]
    },
    {
        name: 'et',
        values: [
            {
                name: 'application/x-www-form-urlencoded'
            },
            {
                name: 'multipart/form-data'
            },
            {
                name: 'text/plain'
            }
        ]
    },
    {
        name: 'tk',
        values: [
            {
                name: 'subtitles'
            },
            {
                name: 'captions'
            },
            {
                name: 'descriptions'
            },
            {
                name: 'chapters'
            },
            {
                name: 'metadata'
            }
        ]
    },
    {
        name: 'pl',
        values: [
            {
                name: 'none'
            },
            {
                name: 'metadata'
            },
            {
                name: 'auto'
            }
        ]
    },
    {
        name: 'sh',
        values: [
            {
                name: 'circle'
            },
            {
                name: 'default'
            },
            {
                name: 'poly'
            },
            {
                name: 'rect'
            }
        ]
    },
    {
        name: 'xo',
        values: [
            {
                name: 'anonymous'
            },
            {
                name: 'use-credentials'
            }
        ]
    },
    {
        name: 'sb',
        values: [
            {
                name: 'allow-forms'
            },
            {
                name: 'allow-modals'
            },
            {
                name: 'allow-pointer-lock'
            },
            {
                name: 'allow-popups'
            },
            {
                name: 'allow-popups-to-escape-sandbox'
            },
            {
                name: 'allow-same-origin'
            },
            {
                name: 'allow-scripts'
            },
            {
                name: 'allow-top-navigation'
            }
        ]
    },
    {
        name: 'tristate',
        values: [
            {
                name: 'true'
            },
            {
                name: 'false'
            },
            {
                name: 'mixed'
            },
            {
                name: 'undefined'
            }
        ]
    },
    {
        name: 'inputautocomplete',
        values: [
            {
                name: 'additional-name'
            },
            {
                name: 'address-level1'
            },
            {
                name: 'address-level2'
            },
            {
                name: 'address-level3'
            },
            {
                name: 'address-level4'
            },
            {
                name: 'address-line1'
            },
            {
                name: 'address-line2'
            },
            {
                name: 'address-line3'
            },
            {
                name: 'bday'
            },
            {
                name: 'bday-year'
            },
            {
                name: 'bday-day'
            },
            {
                name: 'bday-month'
            },
            {
                name: 'billing'
            },
            {
                name: 'cc-additional-name'
            },
            {
                name: 'cc-csc'
            },
            {
                name: 'cc-exp'
            },
            {
                name: 'cc-exp-month'
            },
            {
                name: 'cc-exp-year'
            },
            {
                name: 'cc-family-name'
            },
            {
                name: 'cc-given-name'
            },
            {
                name: 'cc-name'
            },
            {
                name: 'cc-number'
            },
            {
                name: 'cc-type'
            },
            {
                name: 'country'
            },
            {
                name: 'country-name'
            },
            {
                name: 'current-password'
            },
            {
                name: 'email'
            },
            {
                name: 'family-name'
            },
            {
                name: 'fax'
            },
            {
                name: 'given-name'
            },
            {
                name: 'home'
            },
            {
                name: 'honorific-prefix'
            },
            {
                name: 'honorific-suffix'
            },
            {
                name: 'impp'
            },
            {
                name: 'language'
            },
            {
                name: 'mobile'
            },
            {
                name: 'name'
            },
            {
                name: 'new-password'
            },
            {
                name: 'nickname'
            },
            {
                name: 'organization'
            },
            {
                name: 'organization-title'
            },
            {
                name: 'pager'
            },
            {
                name: 'photo'
            },
            {
                name: 'postal-code'
            },
            {
                name: 'sex'
            },
            {
                name: 'shipping'
            },
            {
                name: 'street-address'
            },
            {
                name: 'tel-area-code'
            },
            {
                name: 'tel'
            },
            {
                name: 'tel-country-code'
            },
            {
                name: 'tel-extension'
            },
            {
                name: 'tel-local'
            },
            {
                name: 'tel-local-prefix'
            },
            {
                name: 'tel-local-suffix'
            },
            {
                name: 'tel-national'
            },
            {
                name: 'transaction-amount'
            },
            {
                name: 'transaction-currency'
            },
            {
                name: 'url'
            },
            {
                name: 'username'
            },
            {
                name: 'work'
            }
        ]
    },
    {
        name: 'autocomplete',
        values: [
            {
                name: 'inline'
            },
            {
                name: 'list'
            },
            {
                name: 'both'
            },
            {
                name: 'none'
            }
        ]
    },
    {
        name: 'current',
        values: [
            {
                name: 'page'
            },
            {
                name: 'step'
            },
            {
                name: 'location'
            },
            {
                name: 'date'
            },
            {
                name: 'time'
            },
            {
                name: 'true'
            },
            {
                name: 'false'
            }
        ]
    },
    {
        name: 'dropeffect',
        values: [
            {
                name: 'copy'
            },
            {
                name: 'move'
            },
            {
                name: 'link'
            },
            {
                name: 'execute'
            },
            {
                name: 'popup'
            },
            {
                name: 'none'
            }
        ]
    },
    {
        name: 'invalid',
        values: [
            {
                name: 'grammar'
            },
            {
                name: 'false'
            },
            {
                name: 'spelling'
            },
            {
                name: 'true'
            }
        ]
    },
    {
        name: 'live',
        values: [
            {
                name: 'off'
            },
            {
                name: 'polite'
            },
            {
                name: 'assertive'
            }
        ]
    },
    {
        name: 'orientation',
        values: [
            {
                name: 'vertical'
            },
            {
                name: 'horizontal'
            },
            {
                name: 'undefined'
            }
        ]
    },
    {
        name: 'relevant',
        values: [
            {
                name: 'additions'
            },
            {
                name: 'removals'
            },
            {
                name: 'text'
            },
            {
                name: 'all'
            },
            {
                name: 'additions text'
            }
        ]
    },
    {
        name: 'sort',
        values: [
            {
                name: 'ascending'
            },
            {
                name: 'descending'
            },
            {
                name: 'none'
            },
            {
                name: 'other'
            }
        ]
    },
    {
        name: 'roles',
        values: [
            {
                name: 'alert'
            },
            {
                name: 'alertdialog'
            },
            {
                name: 'button'
            },
            {
                name: 'checkbox'
            },
            {
                name: 'dialog'
            },
            {
                name: 'gridcell'
            },
            {
                name: 'link'
            },
            {
                name: 'log'
            },
            {
                name: 'marquee'
            },
            {
                name: 'menuitem'
            },
            {
                name: 'menuitemcheckbox'
            },
            {
                name: 'menuitemradio'
            },
            {
                name: 'option'
            },
            {
                name: 'progressbar'
            },
            {
                name: 'radio'
            },
            {
                name: 'scrollbar'
            },
            {
                name: 'searchbox'
            },
            {
                name: 'slider'
            },
            {
                name: 'spinbutton'
            },
            {
                name: 'status'
            },
            {
                name: 'switch'
            },
            {
                name: 'tab'
            },
            {
                name: 'tabpanel'
            },
            {
                name: 'textbox'
            },
            {
                name: 'timer'
            },
            {
                name: 'tooltip'
            },
            {
                name: 'treeitem'
            },
            {
                name: 'combobox'
            },
            {
                name: 'grid'
            },
            {
                name: 'listbox'
            },
            {
                name: 'menu'
            },
            {
                name: 'menubar'
            },
            {
                name: 'radiogroup'
            },
            {
                name: 'tablist'
            },
            {
                name: 'tree'
            },
            {
                name: 'treegrid'
            },
            {
                name: 'application'
            },
            {
                name: 'article'
            },
            {
                name: 'cell'
            },
            {
                name: 'columnheader'
            },
            {
                name: 'definition'
            },
            {
                name: 'directory'
            },
            {
                name: 'document'
            },
            {
                name: 'feed'
            },
            {
                name: 'figure'
            },
            {
                name: 'group'
            },
            {
                name: 'heading'
            },
            {
                name: 'img'
            },
            {
                name: 'list'
            },
            {
                name: 'listitem'
            },
            {
                name: 'math'
            },
            {
                name: 'none'
            },
            {
                name: 'note'
            },
            {
                name: 'presentation'
            },
            {
                name: 'region'
            },
            {
                name: 'row'
            },
            {
                name: 'rowgroup'
            },
            {
                name: 'rowheader'
            },
            {
                name: 'separator'
            },
            {
                name: 'table'
            },
            {
                name: 'term'
            },
            {
                name: 'text'
            },
            {
                name: 'toolbar'
            },
            {
                name: 'banner'
            },
            {
                name: 'complementary'
            },
            {
                name: 'contentinfo'
            },
            {
                name: 'form'
            },
            {
                name: 'main'
            },
            {
                name: 'navigation'
            },
            {
                name: 'region'
            },
            {
                name: 'search'
            },
            {
                name: 'doc-abstract'
            },
            {
                name: 'doc-acknowledgments'
            },
            {
                name: 'doc-afterword'
            },
            {
                name: 'doc-appendix'
            },
            {
                name: 'doc-backlink'
            },
            {
                name: 'doc-biblioentry'
            },
            {
                name: 'doc-bibliography'
            },
            {
                name: 'doc-biblioref'
            },
            {
                name: 'doc-chapter'
            },
            {
                name: 'doc-colophon'
            },
            {
                name: 'doc-conclusion'
            },
            {
                name: 'doc-cover'
            },
            {
                name: 'doc-credit'
            },
            {
                name: 'doc-credits'
            },
            {
                name: 'doc-dedication'
            },
            {
                name: 'doc-endnote'
            },
            {
                name: 'doc-endnotes'
            },
            {
                name: 'doc-epigraph'
            },
            {
                name: 'doc-epilogue'
            },
            {
                name: 'doc-errata'
            },
            {
                name: 'doc-example'
            },
            {
                name: 'doc-footnote'
            },
            {
                name: 'doc-foreword'
            },
            {
                name: 'doc-glossary'
            },
            {
                name: 'doc-glossref'
            },
            {
                name: 'doc-index'
            },
            {
                name: 'doc-introduction'
            },
            {
                name: 'doc-noteref'
            },
            {
                name: 'doc-notice'
            },
            {
                name: 'doc-pagebreak'
            },
            {
                name: 'doc-pagelist'
            },
            {
                name: 'doc-part'
            },
            {
                name: 'doc-preface'
            },
            {
                name: 'doc-prologue'
            },
            {
                name: 'doc-pullquote'
            },
            {
                name: 'doc-qna'
            },
            {
                name: 'doc-subtitle'
            },
            {
                name: 'doc-tip'
            },
            {
                name: 'doc-toc'
            }
        ]
    },
    {
        name: 'metanames',
        values: [
            {
                name: 'application-name'
            },
            {
                name: 'author'
            },
            {
                name: 'description'
            },
            {
                name: 'format-detection'
            },
            {
                name: 'generator'
            },
            {
                name: 'keywords'
            },
            {
                name: 'publisher'
            },
            {
                name: 'referrer'
            },
            {
                name: 'robots'
            },
            {
                name: 'theme-color'
            },
            {
                name: 'viewport'
            }
        ]
    }
];
