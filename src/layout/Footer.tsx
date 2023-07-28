import React, { PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from 'src/redux/notificationSlice';

interface Footer extends PropsWithChildren {

}

const Footer: React.FC<Footer> = (props) => {
    const dispatch = useDispatch();

    const onCount = () => {
        dispatch(increment({ jump: 2 }))
    }
    return (
        <>
            <div>Footer</div>
            <button onClick={onCount}>increase</button>
        </>
    )
}

export default Footer