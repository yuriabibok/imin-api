import { Team } from './team.entity';

export const teamProviders = [
  {
    provide: 'TEAM_REPOSITORY',
    useValue: Team,
  },
];
