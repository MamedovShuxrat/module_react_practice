import React, { FunctionComponent } from "react";
import { TArrayOfUsers } from "../../types";
import User from "../user";

interface ITableProps {
    users: TArrayOfUsers
}

const Table: FunctionComponent<ITableProps> = ({ users }): JSX.Element => {
    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <User {...user} key={`user_${index}`} />
                    )
                })
            }
        </div>
    )
}

export default Table