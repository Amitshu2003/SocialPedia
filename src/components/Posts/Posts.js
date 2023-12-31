import React, { useContext } from 'react'
import Post from './Post/Post'
import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core'
import myContext from '../../Context/MyContext';

function Posts({ setCurrentId }) {
    const classes = useStyles();
    const { posts, isLoading } = useContext(myContext)

    // console.log(posts);

    if (!posts.length && !isLoading) return 'No Posts'

    return (
        isLoading ? <CircularProgress />
            : <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={12} md={6} >
                        <Post post={post} md={6} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>

    )
}

export default Posts