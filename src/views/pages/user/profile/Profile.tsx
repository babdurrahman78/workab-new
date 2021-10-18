import React from 'react'
import { Card, CardHeader } from '../../../../components/card/Card'
import { InputField } from '../../../../components/input/InputField'
import { Props } from './Interface'

export const Profile = (props: Props) => {
    return (
        <>
            <Card>
                <CardHeader title="Profile">
                    {/* button */}
                </CardHeader>

                <InputField
                    title="Username"
                    name="username"
                    type="text"
                    errorMessage=""
                    onChanged=""
                />
            </Card>  
        </>
    )
}
