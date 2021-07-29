import { CaseStudyBtn } from './CaseStudyBtn'
import { Heading } from './heading'
import arrow from '../logo/a.svg'
export function Giftcard(props) {
    return <div className='main' style={{background:props.bgclr}}>
       <p className='date'>{props.date}</p>
       <img className='logo' src={props.ims} alt="" />
       <CaseStudyBtn />
        <Heading head={ props.gift}/>
        <Heading head={ props.pay}/>
       <img className='arrow' src={arrow} alt="arroow" />
       <p className='txt'>{props.os} - Mobile</p>
     </div>
}