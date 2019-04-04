import React, { useState, useContext } from 'react';
import { Store } from '../store/Store';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import truncate from 'lodash/truncate';
const styles = (theme) => ({
	card: {
		maxWidth: 400
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	actions: {
		display: 'flex'
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	}
});

const MediaControlCard = (props) => {
	const { classes, theme } = props;

	return (
		<Card style={{ display: 'flex', height: '145px' }} className={classes.card}>
			<div className={classes.details} style={{ width: '500px' }}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{truncate(props.snippet.title, { length: 15, separator: ' ' })}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						{props.snippet.channelTitle}
					</Typography>
				</CardContent>
				<div className={classes.controls}>
					<IconButton aria-label="Previous">
						{theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
					</IconButton>
					<IconButton aria-label="Play/pause">
						<PlayArrowIcon className={classes.playIcon} />
					</IconButton>
					<IconButton aria-label="Next">
						{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
					</IconButton>
				</div>
			</div>

			<CardMedia className={classes.cover} style={{ width: '403px' }} image={props.snippet.thumbnails.high.url} />
		</Card>
	);
};

MediaControlCard.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
