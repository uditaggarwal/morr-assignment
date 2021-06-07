import React, { useState,useEffect } from 'react'
import popularMovie from '../controllers/movieSeriesController'

export default function Movies() {
    const [movieData,setMovieData]=useState()
    const [pageLoad,setPageLoad]=useState(true)
    const [error,setError]=useState(false)
   
    useEffect(() => {
        setPageLoad(true)
        popularMovie.popularMovies().then((res)=>{
            setMovieData(res)
            setPageLoad(false) 
        }).catch((error)=>{
            setError("Something Wrong")
        })
        return () => { }
    }, [])
    return (
        <>
            {
                pageLoad && !error? <p className="text-center m-4 txt-danger">loading ...</p> :
                <div className="movies ">
                    <div className="tag rounded">
                       <h4 className="container p-4 mb-2 ">Popular Movies</h4>
                    </div>
                    <div className="row gx-0 mx-auto container my-2">
                        
                        {
                            movieData.map((value)=>{
                                return(
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                        <img src={value.images['Poster Art'].url} width="100%" height="200px" className="rounded" alt="" />
                                        <p className="text-center mt-2"> {value.title}</p>
                                    </div>

                                )
                            })
                        }
                        
                    </div>
                </div>
            }
            {
                error && <p className="text-center m-4 txt-danger">{error}</p>
            }
            
        </>
    )
}
