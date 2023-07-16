import React from 'react'

export default function Column({children}) {
    return (
        <div className="mx-2 text-2xl container ">
            
            <div className="mx-auto text-2xl flex  justify-center  text-center py-10  ">
            
            <br />
            <div className="mx-2 flex flex-wrap whitespace-break-spaces justify-center">
                  {children}
            </div>
        </div>
        </div>
    )
}