import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 90vh;
`

export const HomeContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HomeContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeImg = styled.img`
    width: 300px;
`

export const HomeTitle = styled.span`
    font-size: var(--big-font-size);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    color: var(--title-color);
    margin-bottom: 20px;
    `

export const HomeSubtitle = styled.span`
    font-size: var(--h3-font-size);
    margin-bottom: 20px;
`

export const HomeButton = styled.span`
    width: 200px;
    height: 70px;
`

export const StyledParagraph = styled.p`
  color: #686868;
  font-size: var(--h3-font-size);
`;

export const StyledDesc = styled(StyledParagraph)`
  font-size: var(--h3-font-size);
`;

export const StyledButton = styled.button`
  display: block;
  width: 262px;
  height: 111px;
  margin-top: 16px;
  background-color: #577ba8;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

export const StyledParagraphButton = styled.p`
  font-size: var(--h3-font-size);
  color: #ffffff;
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const StyledFeatureContainer = styled.div`
  color: #000000;
  width: 640px;
`;

export const StyledFeatureTitle = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const StyledFeatureDesc = styled.p`
  font-size: var(--h3-font-size);
  font-weight: 400px;
  border-top: 3px solid black;
  margin-top: 20px;
  line-height: calc(var(--h3-font-size) + 10px);
`;

export const StyledFeatureImageContainer = styled.div`
  flex: 1;
`;

export const StyledLeftImage = styled.img`
  width: 350px;
  display: block;
  margin-right: auto;
`;

export const StyledRightImage = styled.img`
  width: 350px;
  display: block;
  margin-left: auto;
`;