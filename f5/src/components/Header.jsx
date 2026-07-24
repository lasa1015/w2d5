const Icon = ({ children, size = 24, viewBox = '0 0 24 24' }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox={viewBox}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
)

function Header() {
  return (
    <>
      <header className="metobe-header">
        <div className="metobe-header__start">
          <button className="metobe-icon-button" type="button" aria-label="菜单">
            <Icon>
              <path
                d="M4 6.5h16M4 12h16M4 17.5h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </Icon>
          </button>

          <a className="metobe-logo" href="/" aria-label="Metobe 首页">
            metobe
          </a>
        </div>

        <div className="metobe-header__center">
          <form className="metobe-search" role="search">
            <input
              aria-label="搜索"
              className="metobe-search__input"
              placeholder="搜索"
              type="search"
            />
            <button
              aria-label="搜索"
              className="metobe-search__button"
              type="submit"
            >
              <Icon>
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </Icon>
            </button>
          </form>

          <button
            className="metobe-icon-button metobe-mic"
            type="button"
            aria-label="使用语音搜索"
          >
            <Icon>
              <rect
                height="10"
                rx="3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                width="7"
                x="8.5"
                y="3"
              />
              <path
                d="M5.8 10.5a6.2 6.2 0 0 0 12.4 0M12 16.7V21M9 21h6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </Icon>
          </button>
        </div>

        <div className="metobe-header__end">
          <button className="metobe-create" type="button">
            <Icon size={20}>
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </Icon>
            <span>创建</span>
          </button>

          <button className="metobe-icon-button" type="button" aria-label="通知">
            <Icon>
              <path
                d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8.5h18C21 16 18 16 18 9Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M9.5 20a2.8 2.8 0 0 0 5 0"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
            </Icon>
          </button>

          <button className="metobe-avatar" type="button" aria-label="个人资料">
            M
          </button>
        </div>
      </header>

      <style>{`
        .metobe-header,
        .metobe-header * {
          box-sizing: border-box;
        }

        .metobe-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: grid;
          grid-template-columns: minmax(180px, 1fr) minmax(280px, 650px) minmax(180px, 1fr);
          align-items: center;
          gap: 24px;
          width: 100%;
          height: 56px;
          padding: 0 16px;
          color: #0f0f0f;
          background: rgba(255, 255, 255, 0.98);
          font-family: Roboto, Arial, sans-serif;
        }

        .metobe-header__start,
        .metobe-header__center,
        .metobe-header__end {
          display: flex;
          align-items: center;
        }

        .metobe-header__start {
          gap: 16px;
          justify-self: start;
        }

        .metobe-header__center {
          width: 100%;
          gap: 12px;
        }

        .metobe-header__end {
          justify-self: end;
          gap: 8px;
        }

        .metobe-logo {
          color: #0f0f0f;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -1.1px;
          line-height: 1;
          text-decoration: none;
        }

        .metobe-icon-button,
        .metobe-create,
        .metobe-avatar,
        .metobe-search__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border: 0;
          color: inherit;
          cursor: pointer;
          font: inherit;
        }

        .metobe-icon-button {
          width: 40px;
          height: 40px;
          padding: 0;
          border-radius: 50%;
          background: transparent;
        }

        .metobe-icon-button:hover {
          background: #f2f2f2;
        }

        .metobe-search {
          display: flex;
          flex: 1;
          height: 40px;
          margin-left: 32px;
        }

        .metobe-search__input {
          min-width: 0;
          flex: 1;
          height: 40px;
          padding: 0 16px;
          border: 1px solid #c6c6c6;
          border-radius: 20px 0 0 20px;
          outline: none;
          color: #0f0f0f;
          background: #fff;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
          font: 16px Roboto, Arial, sans-serif;
        }

        .metobe-search__input:focus {
          border-color: #1c62b9;
          box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.12);
        }

        .metobe-search__input::-webkit-search-cancel-button {
          display: none;
        }

        .metobe-search__button {
          width: 64px;
          height: 40px;
          border: 1px solid #c6c6c6;
          border-left: 0;
          border-radius: 0 20px 20px 0;
          background: #f8f8f8;
        }

        .metobe-search__button:hover {
          background: #f0f0f0;
        }

        .metobe-mic {
          background: #f2f2f2;
        }

        .metobe-mic:hover {
          background: #e5e5e5;
        }

        .metobe-create {
          gap: 7px;
          height: 36px;
          padding: 0 16px 0 11px;
          border-radius: 18px;
          background: #f2f2f2;
          font-size: 14px;
          font-weight: 500;
        }

        .metobe-create:hover {
          background: #e5e5e5;
        }

        .metobe-avatar {
          width: 32px;
          height: 32px;
          margin-left: 4px;
          border-radius: 50%;
          color: #fff;
          background: #7e57c2;
          font-size: 15px;
          font-weight: 500;
        }

        @media (max-width: 760px) {
          .metobe-header {
            grid-template-columns: auto 1fr auto;
            gap: 12px;
            padding: 0 10px;
          }

          .metobe-header__start {
            gap: 8px;
          }

          .metobe-search {
            justify-content: flex-end;
            margin-left: 0;
          }

          .metobe-search__input,
          .metobe-mic,
          .metobe-create span {
            display: none;
          }

          .metobe-search__button {
            width: 40px;
            border: 0;
            border-radius: 50%;
            background: transparent;
          }

          .metobe-create {
            width: 40px;
            padding: 0;
          }
        }

        @media (max-width: 480px) {
          .metobe-header__start > .metobe-icon-button,
          .metobe-header__end > .metobe-icon-button {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Header
