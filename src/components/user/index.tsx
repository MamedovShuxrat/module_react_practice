import React, { useState } from "react"
import { FunctionComponent } from "react"
import style from "./style.module.css"
import { IUser } from "../../types"

const User: FunctionComponent<IUser> = ({ name, secondName, age, gender, rank }): JSX.Element => {

    const [rankState, setRankState] = useState<IUser['rank']>(rank)
    const handlerIncease = (): void => {
        setRankState(rankState + 1)
    }

    const handlerDegrease = (): void => {
        setRankState(rankState - 1)
    }

    return (
        <div className={style.UserCard}>
            <div>
                <div className={style.Title}>Пользователь:</div>
                <div>{`${name} ${secondName}`}</div>
            </div>
            <div>
                <div className={style.Title}>
                    Информация:
                </div>
                <div>
                    {`Возраст: ${age}`}
                </div>
                <div>
                    {`Пол: ${gender}`}
                </div>
            </div>
            <div>
                <span className={style.Title}>Рейтинг: </span>
                <span>{rankState}</span>
                {rankState >= 5 ? (<div>Ты Крут!</div>) : ''}
            </div>
            <div>
                <button className={style.Btn} onClick={handlerIncease}>+</button>
                <button className={style.Btn} onClick={handlerDegrease}>-</button>
            </div>

        </div>
    )
}

export default User