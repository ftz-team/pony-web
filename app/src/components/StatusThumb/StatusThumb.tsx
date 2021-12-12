import {Thumb} from './StatusThumb.styled'
export default (text:any, active:any, type:any) => {

    return (
        <Thumb active={active} type={type}>
            {text}
        </Thumb>
    )

}