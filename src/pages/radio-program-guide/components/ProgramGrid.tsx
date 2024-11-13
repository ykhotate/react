import { Box, Link, Stack, Typography } from '@mui/material';

type ProgramGridProps = {
	title: string;
	ftl: string;
	url: string;
	desc: string;
	pfm: string;
};

const ProgramGrid: React.FC<ProgramGridProps> = ({
	title,
	ftl,
	url,
	desc,
	pfm
}) => {
	return (
		<>
			<Stack direction={'row'}>
				<Box minWidth={78} bgcolor={'#2c2c2c'} color={'white'}>
					{ftl ? ftl.slice(0, 2) + ' : ' + ftl.slice(2) : null}
				</Box>
				<Stack pl={2} textAlign={'left'} direction={'column'}>
					<Stack direction={'row'}>
						{url ? (
							<Link href={url}>{title}</Link>
						) : (
							<Typography fontFamily={'Segoe UI'}>
								{title}
							</Typography>
						)}

						<Typography pl={2} fontSize={12} alignSelf={'flex-end'}>
							{pfm}
						</Typography>
					</Stack>
					<Box
						textAlign={'left'}
						dangerouslySetInnerHTML={{ __html: desc }}
						fontSize={11}
						lineHeight={1.1}
						pl={4}
						mt={1}
					/>
				</Stack>
			</Stack>
		</>
	);
};
export default ProgramGrid;
