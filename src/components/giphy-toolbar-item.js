// We need loadingIndicator for the search results
export default (
  <button
    id="dropdown-toggle-btn-38"
    data-testid="base-dropdown-toggle"
    aria-expanded="false"
    aria-controls="base-dropdown-40"
    aria-labelledby="dropdown-toggle-btn-38"
    type="button"
    class="btn btn-default btn-sm gl-button btn-default-tertiary gl-new-dropdown-toggle gl-new-dropdown-icon-only btn-icon gl-new-dropdown-toggle-no-caret gl-trigger"
  >
    {' '}
    <summary
      class="menu-target Button Button--iconOnly Button--invisible Button--medium"
      aria-label="Insert a GIF"
      aria-haspopup="menu"
    >
      GIF
    </summary>
    <details-menu
      class="select-menu-modal position-absolute right-0 gl-new-dropdown-panel"
      style={{
        zIndex: 99,
        width: '480px',
        maxHeight: '410px',
      }}
      role="menu"
    >
      <div class="select-menu-header d-flex">
        <span class="select-menu-title flex-auto">Select a GIF</span>
        <span class="gl-powered-by-giphy" />
      </div>
      <tab-list>
        <div class="select-menu-filters">
          <div class="select-menu-text-filter">
            <input
              type="text"
              class="form-control gl-search-input"
              placeholder="Search for a GIF…"
              aria-label="Search for a GIF"
              autofocus=""
            />
          </div>
          <div
            class="gl-giphy-results"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      </tab-list>
    </details-menu>
  </button>
);
