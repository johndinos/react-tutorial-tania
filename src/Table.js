import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className='button-delete' onClick={() => props.removeCharacter(index)}>Delete</button>
                    <button className='button-edit' onClick={() => props.editCharacter(index)}>Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {
    const {characterData, removeCharacter} = props
    return (
        <table>
            <TableHeader />
            <TableBody 
                characterData={characterData} 
                removeCharacter={removeCharacter}
            />
        </table>
    )
}

export default Table