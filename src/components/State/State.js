import React, { useState } from 'react'
import Category from '../Category/Category'
import './State.css'
import Rank from '../Rank/Rank'
import Fade from '@material-ui/core/Fade'
import GetInvolved from '../GetInvolved/GetInvolved'
// import Paper from '@material-ui/core/Paper'

function State(props) {
	const { stateData, handleStateClose, stateFlag } = props

	const [stateVis, setStateVis] = useState(true)
	const [involvedVis, setInvolvedVis] = useState(false)

	const exit = 500

	const toggleInvolvedVis = () => {
		setInvolvedVis(!involvedVis)
	}

	return (
		<Fade
			mountOnEnter
			in={stateVis}
			timeout={{ enter: 500, exit }}
			unmountOnExit
		>
			<div
				className='stateContainer'
				style={{ backgroundImage: `url(${stateFlag})` }}
			>
				<div className='stateSubContainer'>
					<div className='stateHeadContainer'>
						<div className='stateTitleContainer'>
							<h1 className='stateTitle'>{stateData.overall.stateName}</h1>
							<div className='overall'>
								Overall Rank
								<Rank rank={stateData.overall.rank} />
							</div>
						</div>

						<div className='summaryContainer'>
							<div className='summary'>{stateData.overall.summary}</div>
						</div>

						{/* <div className='flagImageContainer'>
							<svg className='flagSvg'>
								<image className='flagSvg' xlinkHref={stateFlag} />
							</svg>
						</div> */}
					</div>

					<div className='closeStateBtnContainer'>
						<button
							className='button'
							onClick={() => {
								// * Setting the stateVis to trigger exit transition
								setStateVis(false)
								// * Using a setTimeout synced to exit transition time
								// * before altering USMap state with handleStateClose
								setTimeout(() => {
									handleStateClose()
								}, exit)
							}}
						>
							Close
						</button>
					</div>

					<button onClick={() => toggleInvolvedVis()} className='button'>
						Get Involved
					</button>

					<div className='categoryColumnContainer'>
						{stateData.categories.map(elem => {
							return <Category key={elem.title} catData={elem} />
						})}
					</div>
				</div>
				<div className={`involvedVis${involvedVis}`}>
					<GetInvolved 
						toggleInvolvedVis={toggleInvolvedVis} 
						stateName={stateData.overall.stateName} 
					/>
				</div>
			</div>
		</Fade>
	)
}

export default State
