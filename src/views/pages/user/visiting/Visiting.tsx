import React, { useState, useEffect } from "react";
import axios from "axios";
import { VisitingList } from "./Interface";
import { StyledTable, StyledLoading } from './Visiting.element'


export const Visiting = () => {
    const [loading, setLoading] = useState(true)
    const [visitingList, setVisiting] = useState<VisitingList[]>([])
    useEffect(() => {
        axios.get(`/api/user/visiting/history`).then((res: any) => {
            if (res.data.meta.code === 200) {
                setVisiting(res.data.data.visiting)
            }
            setLoading(false)
        })
    }, [])

    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Lokasi</th>
                        <th>Date & Time</th>
                        <th>Lokasi</th>
                    </tr>
                </thead>
                <tbody>
                    {loading &&
                        (<tr>
                            <td colSpan={4} ><StyledLoading>Loading...</StyledLoading></td>
                        </tr>)}
                    {visitingList && visitingList.map((index, key) =>
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{index.shop_name}</td>
                            <td>{index.created_at}</td>
                            <td>{index.type === "In" ? 'Masuk' : 'Pulang'}</td>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </>
    );
}
