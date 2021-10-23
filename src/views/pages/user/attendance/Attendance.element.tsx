import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 100%;
  min-height: 60%;
  border-radius: 30px;
  overflow: hidden;
  border-collapse: collapse;

  & td,
  th {
    text-align: left;
    background-color: red;
  }

  & th {
    background-color: #577ba8;
    color: #ffffff;
    font-size: 20px;
    padding: 20px 20px;
  }

  & td {
    background-color: #c7daf8;
    padding: 10px 20px;
    vertical-align: top;
  }
`;

export const StyledLoading = styled.h3`
  color:  #577ba8;
  text-align: center;
`;