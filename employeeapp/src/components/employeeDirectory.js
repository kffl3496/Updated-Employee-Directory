// import React from "react";
import React, { Component } from 'react';
import data from "./data.json";
// import {input} from "./search"
import "../styles/employeeDirectory.css"

const employees = data.results;
console.log('employees', employees);

function EmployeeDirectory() {
    return (
        <table>
            <tr>
                <th>
                    Image
                </th>
                <th>
                    Username
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Gender
                </th>
                <th>
                    Email
                </th>
                <th>
                    DOB
                </th>
                <th>
                    Age
                </th>
            </tr>
            {
                employees.map(item => (
                    <>
                        <tr key={item.login.uuid}>
                            <td>
                                <img src={item.picture.thumbnail}></img>
                            </td>
                            <td>
                                {item.login.username}
                            </td>
                            <td>
                                {item.name.first}
                            </td>
                            <td>
                                {item.name.last}
                            </td>
                            <td>
                                {item.gender}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {(new Date(item.dob.date)).toLocaleDateString()}
                            </td>
                            <td>
                                {item.dob.age}
                            </td>
                        </tr>
                    </>
                ))
            }
        </table>

        // <ul>
        //     {
        //         employees.map(item => (
        //             <li key={item.login.uuid}>
        //                 <img src={item.picture.thumbnail}></img>
        //                 {item.login.username}
        //             </li>
        //         ))
        //     }
        // </ul>
    );
}

export default EmployeeDirectory;