import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import db from '../firebase'
import { getDoc, doc } from 'firebase/firestore'

const Detail = () => {
	const { id } = useParams()
	const [detailData, setDetailData] = useState({})

	useEffect(() => {
		const docRef = doc(db, 'movies', id)
		// console.log(id)
		const docSnap = getDoc(docRef)
		getDoc(docRef)
			.then((doc) => {
				if (docSnap) {
					setDetailData(doc.data())
				} else {
					console.log('no such document in firebase!')
				}
			})
			.catch((error) => {
				console.log('Error getting document', error.message)
			})
	})
	return (
		<Container>
			<Background>
				<img src={detailData.backgroundImg} alt={detailData.title} />
			</Background>
			<ImageTitle>
				<img src={detailData.titleImg} alt={detailData.title} />
			</ImageTitle>
			<ContentMeta>
				<Controls>
					<PlayButton>
						<img src='/images/play-icon-black.png' alt='' />
						<span>Play</span>
					</PlayButton>
					<TrailerButton>
						<img src='/images/play-icon-white.png' alt='Trailer' />
						<span>Trailer</span>
					</TrailerButton>
					<AddButton>
						<span />
						<span />
					</AddButton>
					<GroupWatchButton>
						<img src='/images/group-icon.png' alt='' />
					</GroupWatchButton>
				</Controls>
			</ContentMeta>
			<SubTitle>{detailData.subTitle}</SubTitle>
			<Description>{detailData.description}</Description>
		</Container>
	)
}

export default Detail

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	top: 72px;
	display: block;
	overflow-x: hidden;
`

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`
const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;
	margin-top: 60px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

const ContentMeta = styled.div`
	max-width: 874px;
`

const Controls = styled.div`
	display: flex;
	align-items: center;
`

const PlayButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	font-size: 15px;
	padding: 0px 24px;
	margin-right: 22px;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;
	cursor: pointer;
	text-transform: uppercase;
	border: none;
	color: rgb(0, 0, 0);

	&:hover {
		background: rgb(198, 198, 198);
	}

	@media (max-width: 768px) {
		height: 45px;
		padding: 0px 22px;
		font-size: 12px;
	}
`

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgba(249, 249, 249);
	text-transform: uppercase;
`

const AddButton = styled.button`
	margin-right: 16px;
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	span {
		background-color: rgb(249, 249, 249);
		display: inline-block;

		&:first-child {
			height: 2px;
			width: 16px;
			transform: translate(1px, 0px) rotate(0deg);
		}

		&:nth-child(2) {
			height: 16px;
			width: 2px;
			translate: translateX(-8px) rotate(0deg);
		}
	}
`

const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`
const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	max-width: 750px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`
