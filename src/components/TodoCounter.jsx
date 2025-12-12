import '../TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2>
            { completed < total ?
                    `Has completado ${completed} de ${total} TODOs`
                :
                    `¡Felicidades! Has completado todos tus TODOs.`
            }
        </h2>
    )
}

export { TodoCounter };