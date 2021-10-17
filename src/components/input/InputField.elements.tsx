import styled from 'styled-components'

export const InputContainer = styled.div`
    margin-top: 20px;
    position: relative;
`

export const InputLabel = styled.label`
    font-size: var(--normal-font-size);

    &.is-invalid {
        font-weight: var(--font-semi-bold);
        color: #ff263c !important;
    }
`

export const InputFieldText = styled.input`
    border: 2px solid var(--text-color);
    width: 100%;
    height: 2.5rem;
    padding: .5rem 1rem;
    border-radius: 20px;
    outline: none;
    background-color: var(--container-color);
    font-size: 1rem;
    font-weight: 400;
    margin-top: 5px;

    :focus {
        border-color: var(--first-color) !important;
        color: var(--title-color) !important;
    }

    &.is-invalid {
        border: 2px solid;
        border-color: #ff263c !important;
    }
`

export const InputFieldPassword = styled.input`
    border: 2px solid var(--text-color);
    width: 100%;
    height: 2.5rem;
    border-radius: 20px;
    outline: none;
    background-color: var(--container-color);
    font-size: 1rem;
    font-weight: 400;
    padding: .5rem 2.5rem .5rem 1rem;
    margin-top: 5px;

    :focus {
        border-color: var(--first-color) !important;
        color: var(--title-color) !important;
    }

    &.is-invalid {
        border: 2px solid;
        border-color: #ff263c !important;
    }
`

export const InputFieldIcon = styled.div`
    position: absolute;
    right: 5px;
    top: 25px;
    padding: 9px 8px;
    cursor: pointer;
    font-size: 20px;

    > .active {
        color: var(--first-color);
    }
`

export const InputMessage = styled.span`
    margin-left: 20px;
    font-size: var(--small-font-size);
    color: #ff263c;
`