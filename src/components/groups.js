import React from 'react'
import Teams from './teams';

const Groups = ({groups}) => {

    return (
        <div>
            {groups.map((group) => (
                <table className="table table-striped table-hover">
                    <th align="left">Group {group.id}</th>
                    <Teams teams={group.teams}/>
                </table>
            ))}
        </div>
    )
};

export default Groups