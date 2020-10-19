import React, { Fragment } from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const Tricks = ({teamdealer, tricks, plucks}) => {
    return (
        <Fragment>
           <div className='tricks'>
               {teamdealer ? <Fragment>
                <TiStarFullOutline size={25} color={tricks > 0 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 1 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 2 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 3 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 4 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 5 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 6 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 7 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 8 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 9 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 10 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 11 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 12 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               </Fragment> : <Fragment>
               <TiStarFullOutline size={25} color={tricks > 0 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 1 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 2 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 3 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 4 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 5 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 6 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 7 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 8 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 9 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 10 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 11 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />
               <TiStarFullOutline size={25} color={tricks > 12 ? '#faf700' : '666666'} style={{ marginBottom: 4}} />


               </Fragment>}
            </div> 
        </Fragment>
    )
}

export default Tricks
