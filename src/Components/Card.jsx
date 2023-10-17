import React from 'react'
// import Katie from '../assets/katie-zaferes.png'
import Star from '../assets/Star.png'

export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        
        <div className='card'>
        {badgeText && <div className="card--badge">{badgeText}</div>}    
        <img src={props.item.coverImg} alt='Card1' className='card--image'/>
        <div className='card--stats'>
        <img src={Star} alt='Star' className='card--star'/>
        <span>{props.item.stats.rating}</span>
        <span className='gray'>({props.item.stats.reviewCount}) • </span>
        <span className='gray'>{props.item.location} </span>
        </div>
        
        <p>{props.item.title} </p>
        <p> <span className='bold'>From ${props.item.price} </span>/ person</p>

        </div>
    )
}