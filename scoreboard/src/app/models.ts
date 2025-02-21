export interface Service {
	name: string;
	attackers: number;
	victims: number;
	first_blood: Array<number>;
	flag_stores: number;
	flag_stores_exploited: number;
}

export interface Team {
	name: string;
	vulnbox: string;
	aff: string;
	country: string;
	logo: string;
}

export interface ServiceResult {
	o: number; // off_points
	d: number; // def_points
	s: number; // sla_points
	do: number; // delta off_points
	dd: number; // delta def_points
	ds: number; // delta sla_points
	st: number; // stolen
	cap: number; // captured
	dst: number; // delta stolen
	dcap: number; // delta captured
	c: number; // checker status
	dc: Array<number>; // old checker results (round-1, -2, -3, ...)
	m: string | null; // checker message
}

export interface Rank {
	team_id: number;
	rank: number;
	points: number;
	o: number; // off_points
	d: number; // def_points
	s: number; // sla_points
	do: number;
	dd: number;
	ds: number;
	services: Array<ServiceResult>;
}

export interface RoundInformation {
	tick: number;
	services: Array<Service>;
	scoreboard: Array<Rank>;
}

export interface TeamHistoryInformation {
	services: Array<Service>;
	points: number[][];
}
