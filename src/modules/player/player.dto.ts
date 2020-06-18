export interface PlayerInGameDTO extends PlayerDTO {
  attendance: boolean;
}

export interface PlayerDTO {
  id: string;
  name: string;
}
