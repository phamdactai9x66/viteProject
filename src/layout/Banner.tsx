import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

interface Banner extends PropsWithChildren {

}

const Banner: React.FC<Banner> = (props) => {
    const counter = useSelector((state:RootState) => state.notification.previousValue)
    return (
        <div>Banner {counter} </div>
    )
}

export default Banner