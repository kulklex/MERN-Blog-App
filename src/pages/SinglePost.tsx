import React from 'react'
import SinglePostComponent from '../components/SinglePostComponent'
import Sidebar from '../sidebar/Sidebar'

type Props = {}

export default function SinglePost({}: Props) {
  return (
    <div className='singlePost flex'>
        <SinglePostComponent/>
        <Sidebar/>
    </div>
  )
}