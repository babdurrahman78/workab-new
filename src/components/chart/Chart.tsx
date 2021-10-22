import React from 'react'
import { Props } from './Interface'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ChartContainer } from './Chart.elements';
import { CardHeader } from '../card/Card';

export const ChartArea = (props: Props) => {
    return (
        <>
            <ChartContainer>
                <CardHeader title={ props.title }/>
                <ResponsiveContainer width="100%" aspect={ 4 / 1 }>
                    <AreaChart 
                        width={730} 
                        height={250} 
                        data={ props.data }
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={ props.dataX } />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey={ props.dataLine1 } stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey={ props.dataLine2 } stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    )
}

export const ChartLine = (props: Props) => {
    return (
        <>
            <ChartContainer>
                <ResponsiveContainer width="100%" aspect={ 4 / 1 }>
                    <LineChart
                        data={ props.data }
                    >
                        <XAxis dataKey={ props.dataX } stroke="#577BA8"/>
                        { props.dataY && <YAxis/> }
                        <Line type="monotone" dataKey={ props.dataLine1 } stroke="#577BA8"/>
                        { props.dataLine2 && <Line type="monotone" dataKey={ props.dataLine2 } stroke="#577BA8"/> }
                        <Tooltip />
                        { props.grid && <CartesianGrid stroke="#E0DFDF" strokeDasharray="5 5"/> }
                        <Legend/>
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    )
}