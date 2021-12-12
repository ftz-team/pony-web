import { ReviewHeader, StarsRow } from "./Review.styled"
import active from '../../assets/img/star-active.png';
import inactive from '../../assets/img/star-inactive.png';

export const Review : React.FC = ( score : any ) => {

    return (

        <>
            <ReviewHeader>{score}</ReviewHeader>
            <StarsRow>
                {[1,2,3,4,5].map((i) => {
                    if (i < score){
                        return <img src={active.src} height="20px" width="20px"/>
                    }
                    return <img src={inactive.src} height="20px" width="20px"/>
                })}
            </StarsRow>
        </>

    )

}