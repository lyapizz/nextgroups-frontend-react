import React from 'react'

const Teams = ({teams}) => {

    return (
        <tbody>
        {teams.map((team, index) => (
            <tr key={'team_' + index}>
                <td>
                    <a href={team.teamPage}> {team.player1} & {team.player2}</a>
                </td>
            </tr>
        ))}
        </tbody>
    )
};

export default Teams