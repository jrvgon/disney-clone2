import React from 'react'
// , { useEffect }
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
// import Movies from './Movies'
// import db from '../firebase'

const Home = () => {
	// useEffect(() => {
	// 	db.collection('movies').onSnapshot(snapshot => {
	// 		console.log(snapshot)
	// 	})
	// }, [])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			{/* <Movies /> */}
		</Container>
	)
}

export default Home

const Container = styled.main`
	min-height: calc(100vh - 250px);
	position: relative;
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:before {
		background: url('/images/home-background.png') center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 0;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`
