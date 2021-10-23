import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Footer } from '../../../components/footer/Footer'
import { Sidebar } from '../../../components/sidebar/Sidebar'
import { Topbar } from '../../../components/topbar/Topbar'
import { UserRoute } from '../../../routes/user/UserRoutes'
import { Props } from './Interface'
import { ULayout, ULayoutContainer, ULayoutContent, ULayoutMainContent } from './UserLayout.elements'

export const UserLayout = (props: Props) => {
    return (
        <>
            <ULayout>
                <ULayoutContainer>
                    <Sidebar type="user" />   

                    <ULayoutContent id="Layout">
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

                        <Footer
                            type="white"
                        />
                    </ULayoutContent>
                </ULayoutContainer>
            </ULayout>
        </>
    )
}
