import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputContainer, InputFieldIcon, InputFieldPassword, InputFieldText, InputLabel, InputMessage } from './InputField.elements'
import { Props } from './Interface'

export const InputField = (props: Props) => {
    const [visibleState, setVisible] = React.useState(false)

    const fieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        
        props.onChanged(fieldName, fieldValue)
    }

    const visibleClick = () => {
        setVisible(!visibleState)
    }

    return (
        <>
            <InputContainer>

                {
                    props.errorMessage ?
                        <InputLabel htmlFor={ props.name } className="is-invalid">{ props.title }</InputLabel>
                    :    
                        <InputLabel htmlFor={ props.name }>{ props.title }</InputLabel>
                }

                {
                    props.errorMessage ?
                        props.type === "password" ?
                            <InputFieldPassword type={ visibleState ? "text" : "password" } name={ props.name } id={ props.name } placeholder={"Masukkan " + props.title} className="is-invalid" onChange={ fieldChange }/>
                        :
                            <InputFieldText type="text" name={ props.name } id={ props.name } className="is-invalid" placeholder={"Masukkan " + props.title} onChange={ fieldChange }/>
                    :
                        props.type === "password" ?
                            <InputFieldPassword type={ visibleState ? "text" : "password" }  name={ props.name } id={ props.name } placeholder={"Masukkan " + props.title} onChange={ fieldChange }/>
                        :
                            <InputFieldText type="text" name={ props.name } id={ props.name } placeholder={"Masukkan " + props.title} onChange={ fieldChange }/>
                }

                {
                    props.type === "password" ?
                        <InputFieldIcon onClick={ visibleClick }>
                            {
                                visibleState ?
                                    <FaEye className="active"/>
                                :
                                    <FaEyeSlash/>
                            }
                        </InputFieldIcon>
                    :
                        ''
                }

                {
                    props.errorMessage ?
                        <InputMessage>
                            { props.errorMessage }
                        </InputMessage>
                    :
                        ''
                }

            </InputContainer>
        </>
    )
}
