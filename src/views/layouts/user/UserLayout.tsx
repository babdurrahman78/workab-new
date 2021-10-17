import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Sidebar } from '../../../components/sidebar/Sidebar'
import { Topbar } from '../../../components/topbar/Topbar'
import { UserRoute } from '../../../routes/user/UserRoutes'
import { Props } from './Interface'
import { ULayout, ULayoutContainer, ULayoutContent, ULayoutMainContent } from './UserLayout.elements'

export const UserLayout = (props: Props) => {
    return (
        <>
            <ULayout id="Layout">
                <ULayoutContainer>
                    <Sidebar type="user" />   

                    <ULayoutContent>
                        <Topbar />

                        <ULayoutMainContent>

                            <Switch>
                                {
                                    UserRoute.map( (route, idx) => {
                                        return (
                                            route.component && (
                                                <Route 
                                                    key={ idx }
                                                    path={ route.path }
                                                    exact={ route.exact }
                                                    name={ route.name }
                                                    render={ (props) =>
                                                        <route.component { ...props } />
                                                    }
                                                />
                                            )
                                        )
                                    })
                                }
                                <Redirect from="/user" to="/user/dashboard" />
                            </Switch>

                        </ULayoutMainContent>
                    </ULayoutContent>
                </ULayoutContainer>
            </ULayout>
        </>
    )
}
