import { Grid } from '@material-ui/core'
import React from 'react'
import PhotoItems from './PhotoItems'

import {useEffect} from "react"


export default function PostList() {

    useEffect( () =>{
        document.title = 'Trang chủ'
    },[])

    return (
        <Grid container md={12} xs={12} sm={12}>
            <PhotoItems/>
        </Grid>
    )
}
