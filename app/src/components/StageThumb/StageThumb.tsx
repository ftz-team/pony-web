import { Thumb } from "./StageThumb.styled"

export const StageThumb = (stage:number) => {

    const stages = {
        0: 'Анкета',
        1: 'Документы',
        2: 'Медицина',
        3: 'В команде'
    }

    return (
        <>
            <Thumb stage={stage}>
                {//@ts-ignore
                stages[stage]}
            </Thumb>
        </>
    )

}