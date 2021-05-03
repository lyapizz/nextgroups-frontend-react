import React from 'react'

const Teams = ({teams}) => {

    return (
        <tbody>
        {teams.map((team) => (
            <tr>
                <td>
                    <a href={team.teamPage}> {team.player1} & {team.player2}</a>
                </td>
            </tr>
        ))}
        </tbody>
    )
};

export default Teams