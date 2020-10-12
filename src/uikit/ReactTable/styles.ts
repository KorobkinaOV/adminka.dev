import styled from 'styled-components';

export const Styles = styled.div`
  overflow-x: auto;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 7px 4px #e2e8f0;
  margin: 30px;

  table {
    border-spacing: 0;

    th {
      text-transform: uppercase;
      color: #cbd3de;
      font-weight: 500;
    }

    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
      background: white;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;
      text-align: left;
    }

    th:first-child,
    td:first-child {
      width: 50px !important;
    }

    tr:last-child td {
      border-bottom: none;
    }
  }
`;
