import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, useParams } from 'react-router-dom'
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { booksId,sportsId,geographyId,filmsId,animalsId } from '../category/CategoryId';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        height:'100px',
        width:'140px',
        color:'white',
    },
    linkTextDecoration:{
        textDecoration:'none'
    }
}));

function Category() {
    const classes = useStyles();

    // const [categoryId,setcategoryId]=useState(0)


    return (
        <div className="category-menu">
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + booksId)}
                variant="contained"
                style={{backgroundColor:'crimson'}}
                color="primary"
                className={classes.button}
                startIcon={<QuestionAnswerIcon />}
            >
                GENERAL 
            </Button>
            </Link>
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + sportsId)}
                variant="contained"
                style={{backgroundColor:'#fc7e2f'}}
                color="primary"
                className={classes.button}
                startIcon={<SportsSoccerOutlinedIcon />}
            >
                SPORTS
            </Button>
            </Link>
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + geographyId)}
                variant="contained"
                style={{backgroundColor:'#6886c5'}}
                className={classes.button}
                startIcon={<PublicOutlinedIcon />}
            >
                GEOGRAPHY
            </Button>
            </Link>
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + historyId)}
                variant="contained"
                style={{backgroundColor:'#E200E2'}}
                color="primary"
                className={classes.button}
                startIcon={<MenuBookOutlinedIcon />}
            >
                BOOKS
            </Button>
            </Link>
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + filmsId)}
                variant="contained"
                style={{backgroundColor:'#F70046'}}
                color="primary"
                className={classes.button}
                startIcon={<TheatersOutlinedIcon />}
            >
                FILMS
            </Button>
            </Link>
            <Link to="/questions" className={classes.linkTextDecoration}>
            <Button
                // onClick={()=>setcategoryId(categoryId + booksId)}
                variant="contained"
                style={{backgroundColor:'#5CA633'}}
                color="primary"
                className={classes.button}
                startIcon={<PetsOutlinedIcon />}
            >
                ANIMALS
            </Button>
            </Link>
        </div>
    )
}





export default Category
