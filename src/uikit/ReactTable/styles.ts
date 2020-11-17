import styled from 'styled-components';

export const Styles = styled.div`
  overflow-x: auto;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 7px 4px #e2e8f0;
  margin: 30px;
  max-height: 1000px;
  height: 100%;
  border-spacing: 0;
  .table {
    .th {
      text-transform: uppercase;
      color: #cbd3de;
      font-weight: 500;
    }

    .th,
    .td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
      background: white;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;
      text-align: left;
    }

    .th:first-child,
    .td:first-child {
      width: 50px !important;
    }

    .tr:last-child .td {
      border-bottom: none;
    }

    &.sticky {
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: auto;
      }
      .header {
        top: 0;
        box-shadow: 0px -1px 8px #ccc;
      }
      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
