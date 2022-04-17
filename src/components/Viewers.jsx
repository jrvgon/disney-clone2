import React from 'react'
import styled from 'styled-components'

function Viewers() {
	return (
		<Container>
			<Wrap>
				<img src='/images/viewers-disney.png' alt='disney' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564674844-disney.mp4' type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src='/images/viewers-pixar.png' alt='pixar' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/156467714-pixar.mp4' type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src='/images/viewers-marvel.png' alt='marvel' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src='/images/viewers-starwars.png' alt='starwars' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1608229455-starwars.mp4' type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src='/images/viewers-national.png' alt='national geographic' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
				</video>
			</Wrap>
		</Container>
	)
}

const Container = styled.div`
	margin-top: 30px;
	display: grid;
	padding: 30px 0px 26px;
	grid-gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`
const Wrap = styled.div`
	border: 3px groove rgba(249, 249, 249, 0.1);
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		inset: 0px;
		width: 100%;
		height: 100%;
		// display: block;
		object-fit: cover;
		opacity: 1;
		transition: opacity 500ms ease-in-out 0s;
		z-index: 1;
		// top: 0;
	}

	&:hover {
		box-shadow: rgba(0 0 0 / 80px) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		opacity: 0;
		z-index: 0;

		&:hover {
			box-shadow: rgba(0 0 0 / 80px) 0px 40px 58px -16px,
				rgba(0 0 0 / 72%) 0px 30px 22px -10px;

			video {
				opacity: 1;
			}
		}
	}
`
export default Viewers
