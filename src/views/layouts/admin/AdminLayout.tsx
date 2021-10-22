import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Sidebar } from '../../../components/sidebar/Sidebar'
import { Topbar } from '../../../components/topbar/Topbar'
import { AdminRoute } from '../../../routes/admin/AdminRoutes'
import { ALayout, ALayoutContainer, ALayoutContent, ALayoutMainContent } from './AdminLayout.elements'
import { Props } from './Interface'

export const AdminLayout = (props: Props) => {
    return (
        <>
            <ALayout>
                <ALayoutContainer>
                    <Sidebar type="admin"/>  

                    <ALayoutContent id="Layout">
                        <Topbar/>

                        <ALayoutMainContent>

                            <Switch>
                                {
                                    AdminRoute.map( (route, idx) => {
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
                                <Redirect from="/admin" to="/admin/dashboard" />
                            </Switch>

                        </ALayoutMainContent>
                    </ALayoutContent>
                </ALayoutContainer>
            </ALayout>
        </>
    )
}
