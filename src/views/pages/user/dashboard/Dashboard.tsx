import React from 'react'
import Visiting from '../../../../img/vector3.png'
import Attendance from '../../../../img/vector4.png'
import { CardInfo, CardLoading } from '../../../../components/card/Card'
import { DashboardInfo } from './Dashboard.elements'
import { Props } from './Interface'
import { ChartArea } from '../../../../components/chart/Chart'
import axios from 'axios'

export const Dashboard = (props: Props) => {
    const [dashboardState, setDashboard] = React.useState({
        attendance: '',
        visiting: '',
        chart: '',
    })
    
    const [loadingState, setLoading] = React.useState(false)

    React.useEffect(() => {
        axios.get('/api/user/dashboard').then( (res: any) => {
            setDashboard({ 
                ...dashboardState,
                attendance: res.data.data.info.attendance,
                visiting: res.data.data.info.visiting,
                chart: res.data.data.chart,
            })
            setLoading(true)
        })
        return () => {
            
        }
    }, [])

    return (
        <>
            <DashboardInfo>
                {
                    loadingState ?
                        <>
                            <CardInfo title="Kunjungan Bulan Ini" subtitle={ dashboardState.visiting } image={ Visiting }/>
                            <CardInfo title="Absen Bulan Ini" subtitle={ dashboardState.attendance } image={ Attendance }/>
                        </>
                    :
                        <>
                            <CardLoading />
                            <CardLoading />
                        </>
                }
            </DashboardInfo>

            {
                loadingState ?
                    <ChartArea
                        title="Laporan bulanan tahun 2021"
                        data={ dashboardState.chart }
                        dataX="month"
                        dataLine1="visiting"
                        dataLine2="attendance"
                    />
                :
                    <CardLoading />
            }
        </>
    )
}
