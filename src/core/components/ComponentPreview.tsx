import type { FunctionComponent } from "react";
import StyledSeparator from "./Separator";

const ComponentPreview: FunctionComponent = () => {
  return (
    <div className="not-prose rounded-box grid gap-3 bg-base-100 text-base-content">
      <StyledSeparator orientation="horizontal" />

      <h3 className="text-2xl">Components</h3>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <button className="btn">Default</button>
        <button className="btn-primary btn">Primary</button>
        <button className="btn-secondary btn">Secondary</button>
        <button className="btn-accent btn">Accent</button>
        <button className="btn-info btn">Info</button>
        <button className="btn-outline btn">Outline</button>
        <button className="btn-inverted btn">Inverted</button>
        <button className="btn-edged btn">Edged</button>
        <button className="glass btn">Glass</button>
        <button className="btn-success btn">Success</button>
        <button className="btn-warning btn">Warning</button>
        <button className="btn-error btn">Error</button>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
        <span className="badge">Default</span>
        <span className="badge-primary badge">Primary</span>
        <span className="badge-secondary badge">Secondary</span>
        <span className="badge-accent badge">Accent</span>
        <span className="badge-info badge">Info</span>
        <span className="badge-success badge">Success</span>
        <span className="badge-warning badge">Warning</span>
        <span className="badge-error badge">Error</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2">
            <div className="tabs">
              <button className="tab-lifted tab">Tab</button>
              <button className="tab-lifted tab tab-active">Tab</button>
              <button className="tab-lifted tab">Tab</button>
            </div>
            <div className="flex flex-col">
              <span className="link">{"I'm a simple link"}</span>
              <span className="link-primary link">{"I'm a simple link"}</span>
              <span className="link-secondary link">{"I'm a simple link"}</span>
              <span className="link-accent link">{"I'm a simple link"}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <progress value="20" max="100" className="progress">
              Default
            </progress>
            <progress
              value="25"
              max="100"
              className="progress progress-primary"
            >
              Primary
            </progress>
            <progress
              value="30"
              max="100"
              className="progress progress-secondary"
            >
              Secondary
            </progress>
            <progress value="40" max="100" className="progress progress-accent">
              Accent
            </progress>
            <progress value="45" max="100" className="progress progress-info">
              Info
            </progress>
            <progress
              value="55"
              max="100"
              className="progress progress-success"
            >
              Success
            </progress>
            <progress
              value="70"
              max="100"
              className="progress progress-warning"
            >
              Warning
            </progress>
            <progress value="90" max="100" className="progress progress-error">
              Error
            </progress>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="stats border border-base-300 bg-base-300 md:w-1/2">
            <div className="stat">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
            <div
              className="radial-progress"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              style={{ "--value": 60, "--size": "3.5rem" }}
            >
              60%
            </div>
            <div
              className="radial-progress"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              style={{ "--value": 60, "--size": "3.5rem" }}
            >
              75%
            </div>
            <div
              className="radial-progress"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              style={{ "--value": 60, "--size": "3.5rem" }}
            >
              90%
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="md:w-1/2">
            <div>
              <input type="checkbox" className="toggle" />
              <input type="checkbox" className="toggle-primary toggle" />
              <input type="checkbox" className="toggle-secondary toggle" />
              <input type="checkbox" className="toggle-accent toggle" />
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <input type="checkbox" className="checkbox-primary checkbox" />
              <input type="checkbox" className="checkbox-secondary checkbox" />
              <input type="checkbox" className="checkbox-accent checkbox" />
            </div>
            <div>
              <input type="radio" name="radio-1" className="radio" />
              <input
                type="radio"
                name="radio-1"
                className="radio-primary radio"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio-secondary radio"
              />
              <input
                type="radio"
                name="radio-1"
                className="radio-accent radio"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <input type="range" min="0" max="100" className="range range-xs" />
            <input
              type="range"
              min="0"
              max="100"
              className="range range-primary range-xs"
            />
            <input
              type="range"
              min="0"
              max="100"
              className="range range-secondary range-xs"
            />
            <input
              type="range"
              min="0"
              max="100"
              className="range range-accent range-xs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col gap-3 md:w-1/2">
            <input
              type="text"
              placeholder="Default"
              className="input-bordered input w-full"
            />
            <input
              type="text"
              placeholder="Primary"
              className="input-bordered input-primary input w-full"
            />
            <input
              type="text"
              placeholder="Secondary"
              className="input-bordered input-secondary input w-full"
            />
            <input
              type="text"
              placeholder="Accent"
              className="input-bordered input-accent input w-full"
            />
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <input
              type="text"
              placeholder="Info"
              className="input-bordered input-info input w-full"
            />
            <input
              type="text"
              placeholder="Success"
              className="input-bordered input-success input w-full"
            />
            <input
              type="text"
              placeholder="Warning"
              className="input-bordered input-warning input w-full"
            />
            <input
              type="text"
              placeholder="Error"
              className="input-bordered input-error input w-full"
            />
          </div>
        </div>
        <div className="navbar rounded-box bg-neutral text-neutral-content">
          <div className="flex-none">
            <button className="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <button className="btn-ghost btn text-xl normal-case">
              daisyUI
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-grow flex-col gap-3">
            <div className="text-4xl font-bold">Text Size 1</div>
            <div className="text-3xl font-bold">Text Size 2</div>
            <div className="text-2xl font-bold">Text Size 3</div>
            <div className="text-xl font-bold">Text Size 4</div>
            <div className="text-lg font-bold">Text Size 5</div>
            <div className="text-sm font-bold">Text Size 6</div>
            <div className="text-xs font-bold">Text Size 7</div>
          </div>
          <ul className="steps steps-vertical">
            <li className="step-primary step">Step 1</li>
            <li className="step-primary step">Step 2</li>
            <li className="step">Step 3</li>
            <li className="step">Step 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="alert alert-info">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 flex-shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>New software update available.</span>
          </div>
        </div>
        <div className="alert alert-success">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
        <div className="alert alert-warning">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>
        <div className="alert alert-error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPreview;
