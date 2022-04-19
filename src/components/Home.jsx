import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
// import Movies from './Movies'
import db from '../firebase'
import { selectUserName } from '../features/user/userSlice'
import { setMovies } from '../features/movie/movieSlice'
import { collection, onSnapshot } from 'firebase/firestore'

const Home = (props) => {
	const dispatch = useDispatch()
	const userName = useSelector(selectUserName)
	const colRef = collection(db, 'movies')

	useEffect(() => {
		let recommends = []
		let newDisneys = []
		let originals = []
		let trending = []

		onSnapshot(colRef, (snapshot) => {
			// eslint-disable-next-line array-callback-return
			snapshot.docs.map((doc) => {
				switch (doc.data().type) {
					case 'recommend':
						recommends = [...recommends, { id: doc.id, ...doc.data() }]
						break

					case 'new':
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
						break

					case 'original':
						originals = [...originals, { id: doc.id, ...doc.data() }]
						break

					case 'trending':
						trending = [...trending, { id: doc.id, ...doc.data() }]
						break
					// no default
				}
			})

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userName])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	)
}

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

export default Home
