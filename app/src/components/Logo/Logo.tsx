import img from '../../../src/assets/img/icon.png'
import { LogoBox, LogoText } from './Logo.styled'

export const Logo : React.FC = () => {

    return (
        <>
            <LogoBox>
                <img src={img.src}></img>
                <LogoText>Wash</LogoText>
            </LogoBox>
        </>
    )

}