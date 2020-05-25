export default () => (
  <div className="accordion-container">
    <div className="accordion">
      <input id="accordion-getting-started" type="checkbox" name="app-accordion-checkbox" hidden />
      <label className="accordion-header c-hand" htmlFor="accordion-getting-started">
        Getting started
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="getting-started/installation.html">Installation</a>
          </li>
          <li className="menu-item">
            <a href="getting-started/custom.html">Custom version</a>
          </li>
          <li className="menu-item">
            <a href="getting-started/browsers.html">Browser support</a>
          </li>
          <li className="menu-item">
            <a href="getting-started/whatsnew.html">What's new</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion">
      <input id="accordion-elements" type="checkbox" name="app-accordion-checkbox" hidden />
      <label className="accordion-header c-hand" htmlFor="accordion-elements">
        Elements
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="elements/typography.html">Typography</a>
          </li>
          <li className="menu-item">
            <a href="elements/tables.html">Tables</a>
          </li>
          <li className="menu-item">
            <a href="elements/buttons.html">Buttons</a>
          </li>
          <li className="menu-item">
            <a href="elements/forms.html">Forms</a>
          </li>
          <li className="menu-item">
            <a href="elements/icons.html">Icons.css</a>
          </li>
          <li className="menu-item">
            <a href="elements/labels.html">Labels</a>
          </li>
          <li className="menu-item">
            <a href="elements/code.html">Code</a>
          </li>
          <li className="menu-item">
            <a href="elements/media.html">Media</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion">
      <input id="accordion-layout" type="checkbox" name="app-accordion-checkbox" hidden />
      <label className="accordion-header c-hand" htmlFor="accordion-layout">
        Layout
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="layout/grid.html">Flexbox grid</a>
          </li>
          <li className="menu-item">
            <a href="layout/responsive.html">Responsive</a>
          </li>
          <li className="menu-item">
            <a href="layout/hero.html">Hero</a>
          </li>
          <li className="menu-item">
            <a href="layout/navbar.html">Navbar</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion">
      <input
        id="accordion-components"
        type="checkbox"
        name="app-accordion-checkbox"
        hidden
        defaultChecked="checked"
      />
      <label className="accordion-header c-hand" htmlFor="accordion-components">
        Components
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="components/accordions.html">Accordions</a>
          </li>
          <li className="menu-item">
            <a href="components/avatars.html">Avatars</a>
          </li>
          <li className="menu-item">
            <a href="components/badges.html">Badges</a>
          </li>
          <li className="menu-item">
            <a href="components/bars.html">Bars</a>
          </li>
          <li className="menu-item">
            <a href="components/breadcrumbs.html">Breadcrumbs</a>
          </li>
          <li className="menu-item">
            <a href="components/cards.html">Cards</a>
          </li>
          <li className="menu-item">
            <a href="components/chips.html">Chips</a>
          </li>
          <li className="menu-item">
            <a href="components/empty.html">Empty states</a>
          </li>
          <li className="menu-item">
            <a href="components/menu.html">Menu</a>
          </li>
          <li className="menu-item">
            <a href="components/modals.html">Modals</a>
          </li>
          <li className="menu-item">
            <a href="components/nav.html">Nav</a>
          </li>
          <li className="menu-item">
            <a href="components/pagination.html">Pagination</a>
          </li>
          <li className="menu-item">
            <a href="components/panels.html">Panels</a>
          </li>
          <li className="menu-item">
            <a href="components/popovers.html">Popovers</a>
          </li>
          <li className="menu-item">
            <a href="components/steps.html">Steps</a>
          </li>
          <li className="menu-item">
            <a href="components/tabs.html">Tabs</a>
          </li>
          <li className="menu-item">
            <a href="components/tiles.html">Tiles</a>
          </li>
          <li className="menu-item">
            <a href="components/toasts.html">Toasts</a>
          </li>
          <li className="menu-item">
            <a href="components/tooltips.html">Tooltips</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion">
      <input id="accordion-utilities" type="checkbox" name="app-accordion-checkbox" hidden />
      <label className="accordion-header c-hand" htmlFor="accordion-utilities">
        Utilities
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="utilities/colors.html">Colors</a>
          </li>
          <li className="menu-item">
            <a href="utilities/cursors.html">Cursors</a>
          </li>
          <li className="menu-item">
            <a href="utilities/display.html">Display</a>
          </li>
          <li className="menu-item">
            <a href="utilities/divider.html">Divider</a>
          </li>
          <li className="menu-item">
            <a href="utilities/loading.html">Loading</a>
          </li>
          <li className="menu-item">
            <a href="utilities/position.html">Position</a>
          </li>
          <li className="menu-item">
            <a href="utilities/shapes.html">Shapes</a>
          </li>
          <li className="menu-item">
            <a href="utilities/text.html">Text</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="accordion">
      <input id="accordion-experimentals" type="checkbox" name="app-accordion-checkbox" hidden />
      <label className="accordion-header c-hand" htmlFor="accordion-experimentals">
        Experimentals
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <a href="experimentals/viewer-360.html">360-Degree Viewer</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/autocomplete.html">Autocomplete</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/calendars.html">Calendars</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/carousels.html">Carousels</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/comparison.html">Comparison sliders</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/filters.html">Filters</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/meters.html">Meters</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/off-canvas.html">Off-canvas</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/parallax.html">Parallax</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/progress.html">Progress</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/sliders.html">Sliders</a>
          </li>
          <li className="menu-item">
            <a href="experimentals/timelines.html">Timelines</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
