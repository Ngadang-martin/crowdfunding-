import React,{useEffect} from 'react'
import Header from './Header'
import Content from './Content'
import HeroSection from './HeroSection'
import { useSelector,useDispatch } from 'react-redux'
import {getCategory} from '../../state/actions/CategoryAction'
import {allProjectData} from '../../state/actions/ProjectAction'

const Home = () => {
    const category = useSelector(state => state.categoryReducer.category)
    const projects = useSelector(state => state.projectReducer.projectData)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getCategory)
       dispatch(allProjectData)
    },[dispatch])
    return (
        <div>
            <Header category={category}/>
            <HeroSection/>
            <Content category={category} projects={projects}/>
        </div>
    )
}
export default Home