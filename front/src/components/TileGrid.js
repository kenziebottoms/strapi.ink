import React, {
  Fragment,
  useState,
  useEffect,
} from 'react'

import Tile from './Tile'
import LoadingIcon from '../elements/LoadingIcon'

import '../styles/components/TileGrid.scss'

const TileGrid = ({
  dataSource,
  children,
  linkHead,
  id,
}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    dataSource.then(json => {
      setPosts(json)
    })
  }, [dataSource])


  return (
    <div id={id} className='tileGrid'>
      {posts.length === 0 ?
        <LoadingIcon /> :
        <Fragment>
          {children}
          {posts.map((post) =>
            <Tile
              key={post.id}
              post={post}
              linkHead={linkHead}
            />,
          )}
        </Fragment>
      }
    </div>
  )
}

export default TileGrid
