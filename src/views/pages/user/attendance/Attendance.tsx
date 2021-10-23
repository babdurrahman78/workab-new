import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledTable, StyledLoading } from './Attendance.element'
import { AttendanceProps } from './AttendanceProps'

export const Attendance = () => {
  const [loading, setLoading] = useState(true)
  const [attendanceList, setAttendance] = useState<AttendanceProps[]>()
  useEffect(() => {
      axios.get(`/api/user/attendance/history`).then(( res: any) => {
        if ( res.data.meta.code === 200 ) {
          setAttendance( res.data.data.attendance )
        }
        setLoading( false )
      })
    }, [])

    return (
    <>
        <StyledTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Riwayat</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            { loading && 
            (<tr>
              <td colSpan={4} ><StyledLoading>Loading...</StyledLoading></td>
            </tr>)}
            { attendanceList && attendanceList.map((index, key) => 
          <tr key={key}>
            <td>{ key+1 }</td>
            <td>{ index.name }</td>
            <td>{ index.time }</td>
            <td>{ index.type === "In" ? 'Masuk' : 'Pulang' }</td>
          </tr>
       ) }
          </tbody>
        </StyledTable>
    </>
  );
}
