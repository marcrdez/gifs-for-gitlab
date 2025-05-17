// We need loadingIndicator for the search results
export default (
  <div class="gl-inline-flex gl-align-middle" data-testid="giphy-toolbar-item">
    <div
      class="gl-disclosure-dropdown content-editor-table-dropdown gl-new-dropdown"
      aria-label="Insert GIF"
    >
      <button
        id="dropdown-toggle-btn-66"
        data-testid="base-dropdown-toggle"
        aria-expanded="false"
        aria-controls="base-dropdown-68"
        aria-labelledby="dropdown-toggle-btn-66"
        type="button"
        class="btn btn-default btn-sm gl-button btn-default-tertiary gl-new-dropdown-toggle gl-new-dropdown-toggle-no-caret gl-trigger"
      >
        GIF
        <span class="gl-button-text">
          <span class="gl-new-dropdown-button-text gl-sr-only">Insert GIF</span>
        </span>
      </button>
      <div
        id="base-dropdown-68"
        data-testid="base-dropdown-menu"
        class="!gl-w-75 gl-new-dropdown-panel !gl-block gl-absolute gl-dropdown-menu"
        style={{
          left: 'auto',
          right: '32px',
          top: '40px',
          width: '480px',
          maxHeight: '410px',
          zIndex: '99',
          visibility: 'hidden',
        }}
      >
        <div
          class="gl-new-dropdown-arrow"
          style={{ left: '456px', top: '-4px', transform: 'rotate(45deg)' }}
        />
        <div class="gl-new-dropdown-inner">
          <div class="gl-flex gl-min-h-8 gl-items-center !gl-p-4 gl-border-b-1 gl-border-b-solid gl-border-b-dropdown-divider">
            <div
              id="listbox-header-3"
              data-testid="listbox-header-text"
              class="gl-grow gl-pr-2 gl-text-sm gl-font-bold gl-text-strong"
            >
              Select a GIF
            </div>
          </div>
          <div class="gl-border-b-1 gl-border-b-solid gl-border-b-dropdown-divider">
            <div class="gl-listbox-search" data-testid="listbox-search-input">
              <svg
                data-testid="search-sm-icon"
                role="img"
                aria-hidden="true"
                class="gl-listbox-search-icon gl-icon s12 gl-fill-current"
              >
                <use href="/assets/icons-aa2c8ddf99d22b77153ca2bb092a23889c12c597fc8b8de94b0f730eb53513f6.svg#search-sm"></use>
              </svg>
              <input
                type="search"
                aria-label="Search for a GIF"
                placeholder="Search for a GIF…"
                class="gl-listbox-search-input gl-search-input"
                autofocus
              />
            </div>
            <div
              class="gl-giphy-results"
              style={{
                maxHeight: '650px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
