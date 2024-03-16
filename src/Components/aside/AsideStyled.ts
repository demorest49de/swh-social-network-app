import styled, {css} from "styled-components";
type litype = {
    linkisActive?: boolean
}
export const LiStyled = styled.li`
  &:has(.active:hover) {
    padding: 3px;
    border-radius: 15px;
    outline-offset: 2px;
    outline: 2px solid chocolate;
  }
`