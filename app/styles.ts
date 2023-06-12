'use client';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
export const useStyles = makeStyles({
	body: {
		
	},

	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '200px',

		...shorthands.border('2px', 'dashed', tokens.colorPaletteBerryBorder2),
		...shorthands.borderRadius(tokens.borderRadiusLarge),
		...shorthands.gap('5px'),
		...shorthands.padding('10px'),
	},
});
