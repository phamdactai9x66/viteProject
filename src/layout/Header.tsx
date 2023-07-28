import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

interface Header extends PropsWithChildren {

}

const Header: React.FC<Header> = (props) => {
    const counter = useSelector((state:RootState) => state.notification)
    return (
        <div>Header {counter.value} </div>
    )
}

export default Header