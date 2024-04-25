import React from 'react';

export default function Sidenav() {

  const htmlPath = '';
  const path = '';
  const mainPage = '';
  const page = '';

  return (

    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">  
      <div className="sidebar-brand">
  
        <a href={htmlPath + "/index.html"} className="brand-link">
      
          <img
            src={path + "/assets/img/AdminLTELogo.png"}
            alt="AdminLTE Logo"
            className="brand-image opacity-75 shadow"
          />
      
          <span className="brand-text fw-light">AdminLTE 4</span>
      
        </a>
  
      </div>
  
  <div className="sidebar-wrapper">
    <nav className="mt-2">
  
      <ul
        className="nav sidebar-menu flex-column"
        data-lte-toggle="treeview"
        role="menu"
        data-accordion="false"
      >
        <li class:list={["nav-item", mainPage === "dashboard" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "dashboard" && "active"]}
          >
            <i className="nav-icon bi bi-speedometer"></i>
            <p>
              Dashboard
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/index.html"}
                class:list={["nav-link", page === "index" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/index2.html"}
                class:list={["nav-link", page === "index2" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/index3.html"}
                class:list={["nav-link", page === "index3" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li class:list={["nav-item", mainPage === "widgets" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "widgets" && "active"]}
          >
            <i className="nav-icon bi bi-box-seam-fill"></i>
            <p>
              Widgets
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/widgets/small-box.html"}
                class:list={["nav-link", page === "small-box" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Small Box</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/widgets/info-box.html"}
                class:list={["nav-link", page === "info-box" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>info Box</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/widgets/cards.html"}
                class:list={["nav-link", page === "cards" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Cards</p>
              </a>
            </li>
          </ul>
        </li>
        <li class:list={["nav-item", mainPage === "layout" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "layout" && "active"]}
          >
            <i className="nav-icon bi bi-clipboard-fill"></i>
            <p>
              Layout Options
              <span className="nav-badge badge text-bg-secondary me-3"
              >6</span
              >
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/unfixed-sidebar.html"}
                class:list={[
                  "nav-link",
                  page === "unfixed-sidebar" && "active",
                ]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Default Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/fixed-sidebar.html"}
                class:list={["nav-link", page === "fixed-sidebar" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Fixed Sidebar</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/fixed-complete.html"}
                class:list={["nav-link", page === "fixed-complete" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Fixed Complete</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/sidebar-mini.html"}
                class:list={["nav-link", page === "sidebar-mini" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/collapsed-sidebar.html"}
                class:list={[
                  "nav-link",
                  page === "collapsed-sidebar" && "active",
                ]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini <small>+ Collapsed</small></p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/logo-switch.html"}
                class:list={["nav-link", page === "logo-switch" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini <small>+ Logo Switch</small></p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/layout/layout-rtl.html"}
                class:list={["nav-link", page === "layout-rtl" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Layout RTL</p>
              </a>
            </li>
          </ul>
        </li>
        <li
          class:list={["nav-item", mainPage === "ui-elements" && "menu-open"]}
        >
          <a
            href="#"
            class:list={["nav-link", mainPage === "ui-elements" && "active"]}
          >
            <i className="nav-icon bi bi-tree-fill"></i>
            <p>
              UI Elements
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/UI/general.html"}
                class:list={["nav-link", page === "general" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>General</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/UI/timeline.html"}
                class:list={["nav-link", page === "timeline" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Timeline</p>
              </a>
            </li>
          </ul>
        </li>
        <li class:list={["nav-item", mainPage === "forms" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "forms" && "active"]}
          >
            <i className="nav-icon bi bi-pencil-square"></i>
            <p>
              Forms
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/forms/general.html"}
                class:list={["nav-link", page === "general" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>General Elements</p>
              </a>
            </li>
          </ul>
        </li>
        <li class:list={["nav-item", mainPage === "tables" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "tables" && "active"]}
          >
            <i className="nav-icon bi bi-table"></i>
            <p>
              Tables
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/tables/simple.html"}
                class:list={["nav-link", page === "simple" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Simple Tables</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-header">EXAMPLES</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-box-arrow-in-right"></i>
            <p>
              Auth
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                <p>
                  Version 1
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href={htmlPath + "/examples/login.html"} className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href={htmlPath + "/examples/register.html"} className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Register</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                <p>
                  Version 2
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href={htmlPath + "/examples/login-v2.html"} className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href={htmlPath + "/examples/register-v2.html"} className="nav-link">
                    <i className="nav-icon bi bi-circle"></i>
                    <p>Register</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href={htmlPath + "/examples/lockscreen.html"} className="nav-link">
                <i className="nav-icon bi bi-circle"></i>
                <p>Lockscreen</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-header">DOCUMENTATIONS</li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/introduction.html"}
            class:list={["nav-link", page === "introduction" && "active"]}
          >
            <i className="nav-icon bi bi-download"></i>
            <p>Installation</p>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/layout.html"}
            class:list={["nav-link", page === "layout" && "active"]}
          >
            <i className="nav-icon bi bi-grip-horizontal"></i>
            <p>Layout</p>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/color-mode.html"}
            class:list={["nav-link", page === "color-mode" && "active"]}
          >
            <i className="nav-icon bi bi-star-half"></i>
            <p>Color Mode</p>
          </a>
        </li>
        <li class:list={["nav-item", mainPage === "components" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "components" && "active"]}
          >
            <i className="nav-icon bi bi-ui-checks-grid"></i>
            <p>
              Components
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/docs/components/main-header.html"}
                class:list={["nav-link", page === "main-header" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Main Header</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                href={htmlPath + "/docs/components/main-sidebar.html"}
                class:list={["nav-link", page === "main-sidebar" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Main Sidebar</p>
              </a>
            </li>
          </ul>
        </li>
        <li class:list={["nav-item", mainPage === "javascript" && "menu-open"]}>
          <a
            href="#"
            class:list={["nav-link", mainPage === "javascript" && "active"]}
          >
            <i className="nav-icon bi bi-filetype-js"></i>
            <p>
              Javascript
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a
                href={htmlPath + "/docs/javascript/treeview.html"}
                class:list={["nav-link", page === "treeview" && "active"]}
              >
                <i className="nav-icon bi bi-circle"></i>
                <p>Treeview</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/browser-support.html"}
            class:list={["nav-link", page === "browser-support" && "active"]}
          >
            <i className="nav-icon bi bi-browser-edge"></i>
            <p>Browser Support</p>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/how-to-contribute.html"}
            class:list={["nav-link", page === "how-to-contribute" && "active"]}
          >
            <i className="nav-icon bi bi-hand-thumbs-up-fill"></i>
            <p>How To Contribute</p>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/faq.html"}
            class:list={["nav-link", page === "faq" && "active"]}
          >
            <i className="nav-icon bi bi-question-circle-fill"></i>
            <p>FAQ</p>
          </a>
        </li>
        <li className="nav-item">
          <a
            href={htmlPath + "/docs/license.html"}
            class:list={["nav-link", page === "license" && "active"]}
          >
            <i className="nav-icon bi bi-patch-check-fill"></i>
            <p>License</p>
          </a>
        </li>

        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle-fill"></i>
            <p>Level 1</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle-fill"></i>
            <p>
              Level 1
              <i className="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle"></i>
                <p>Level 2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle"></i>
                <p>
                  Level 2
                  <i className="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-circle"></i>
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle-fill"></i>
            <p>Level 1</p>
          </a>
        </li>

        <li className="nav-header">LABELS</li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle text-danger"></i>
            <p className="text">Important</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle text-warning"></i>
            <p>Warning</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon bi bi-circle text-info"></i>
            <p>Informational</p>
          </a>
        </li>
      </ul>
      
    </nav>
  </div>
  
</aside>

  )

}