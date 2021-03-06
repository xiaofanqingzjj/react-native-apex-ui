
'use strict';

var spacing = require('./spacing');
var palette = require('./palette');
var PlatformStyleSheet = require('../../utils/PlatformStyleSheet');
import {fade, darken} from '../../utils/colorManipulator';

module.exports = PlatformStyleSheet.create({
	spacing,
	palette,
	navBar: {
		backgroundColor: 'white',
	},
	vectorIcon: {
		size: 24,
	},
	listItem: {
		underlayColor: '#ececec',
	},
	paper: {
		backgroundColor: palette.canvasColor,
		ios: {
			zDepthShadows: [
				[1, 4, 0.24],
		        [3, 10, 0.39],
		        [6, 10, 0.42],
		        [10, 18, 0.47],
		        [15, 20, 0.52],
			].map(d => ({
				shadowOffset: {width: 0, height: d[0]},
				shadowRadius: d[1],
				shadowColor: fade(palette.shadowColor, d[2]),
				shadowOpacity: 1,
			})),
		},
		android: {
			zDepthShadows: [],
		}
	},
	mask: {
    	backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
	ripple: {
		color: 'rgba(0, 0, 0, 0.75)',
		opacity: .3,
	},
	tag: {
		backgroundColor: darken(palette.canvasColor, 0.12),
		textColor: palette.textColor, 
		deleteIconColor: fade(palette.textColor, 0.26),
		fontSize: 14,
		fontWeight: 'normal',
	},
	toptip: {
		backgroundColors: {
			error: '#f6383a',
			warning: '#f60',
			success: '#4cd964',
			info: '#eee',
		},
		colors: {
			error: '#fff',
			warning: '#fff',
			success: '#fff',
			info: '#000',
		}
	},
	tooltip: {
		color: '#fff',
      	backgroundColor: '#616161',
		opacity: 0.9,
		arrowSize: 6,
	},
	actionSheet: {
		borderRadius: 6,
		backgroundColor: '#fff', 
		separatorColor: '#e4e4e4',
		cancelTextColor: '#0069d5',
		buttonHeight: 46,
		buttonTextSize: 18,
		buttonTextColor: '#000',
	}
});
