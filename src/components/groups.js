import React from 'react'
import Teams from './teams';

const Groups = ({groups}) => {

    return (
        <div>
            {groups.map((group, index) => (
                <table className="table table-striped table-hover" key={'table_' + index}>
                    <thead>
                    <tr>
                        <td>
                            Group {group.id}
                        </td>
                    </tr>
                    </thead>
                    <Teams teams={group.teams}/>
                </table>
            ))}
        </div>
    )
};

export default Groups