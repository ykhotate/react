import { XMLParser } from 'fast-xml-parser';
import { Dayjs } from 'dayjs';
import { radikoClient } from '../../../hooks';
import { Program } from '../types';
import { RadikoXMLParser } from './radiko-xml-parser';

export const fetchRadioPrograms = async (
	searchDay: Dayjs
): Promise<Program[]> => {
	const dayString = searchDay.format('YYYYMMDD');
	const searchURI = dayString + '/FMAICHI' + '.xml';
	const response = await radikoClient.get(searchURI);
	const parser = new XMLParser();
	const jsonData = parser.parse(response.data);
	return RadikoXMLParser(response.data, jsonData.radiko.stations.station);
};
