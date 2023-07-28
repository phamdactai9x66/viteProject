import React,{PropsWithChildren} from 'react'

interface Banner extends PropsWithChildren {

}

const Banner:React.FC<Banner> = ({}) => {
  return (
    <div>Banner</div>
  )
}

export default Banner