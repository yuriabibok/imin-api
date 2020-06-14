import { Team } from './team.entity';
import { TeamDTO } from './team.dto';

export const map = (team: Team): TeamDTO => {
  return {
    id: team.id,
    name: team.name,
    capacity: team.capacity,
  };
};
